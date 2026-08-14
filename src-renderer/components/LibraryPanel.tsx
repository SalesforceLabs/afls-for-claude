import React, { useState, useRef, useEffect, useCallback } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useDiagramControls, DiagramZoomToolbar, DiagramViewport } from "./ChatView";

interface LibraryItem {
  id: string;
  title: string;
  content: string;
  contentType: "response" | "code" | "diagram" | "table";
  svg?: string;
  sourceConversationTitle?: string;
  tags: string[];
  createdAt: string;
}

interface LibraryPanelProps {
  items: LibraryItem[];
  onClose: () => void;
  onDelete: (id: string) => void;
  onSearch: (query: string) => void;
  onGoToSession: (conversationId: string) => void;
  focusItemId?: string | null;
}

const TYPE_LABELS: Record<string, string> = {
  response: "Response",
  code: "Code",
  diagram: "Diagram",
  table: "Table",
};

const iconStyle = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function TypeIcon({ type }: { type: string }) {
  switch (type) {
    case "diagram":
      return (
        <svg {...iconStyle}>
          <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
        </svg>
      );
    case "code":
      return (
        <svg {...iconStyle}>
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "table":
      return (
        <svg {...iconStyle}>
          <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      );
    default: // response
      return (
        <svg {...iconStyle}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return d.toLocaleDateString();
}

function LibraryDiagramDetail({ svg }: { svg: string }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const controls = useDiagramControls();

  useEffect(() => {
    if (!isFullscreen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsFullscreen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFullscreen]);

  const fullscreenBtn = (
    <button onClick={() => setIsFullscreen((f) => !f)} title={isFullscreen ? "Exit full screen" : "Full screen"}>
      {isFullscreen ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 14 10 14 10 20" /><polyline points="20 10 14 10 14 4" /><line x1="14" y1="10" x2="21" y2="3" /><line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      )}
    </button>
  );

  if (isFullscreen) {
    return (
      <div className="mermaid-panel-fullscreen" style={{ display: "flex", flexDirection: "column" }}>
        <div className="mermaid-panel-header">
          <span className="mermaid-card-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
            </svg>
            Diagram
          </span>
          <DiagramZoomToolbar controls={controls} extraButtons={fullscreenBtn} />
        </div>
        <DiagramViewport svg={svg} controls={controls} />
      </div>
    );
  }

  return (
    <>
      <div className="library-detail-diagram-toolbar">
        <DiagramZoomToolbar controls={controls} extraButtons={fullscreenBtn} />
      </div>
      <div className="library-detail-diagram-viewport">
        <DiagramViewport svg={svg} controls={controls} />
      </div>
    </>
  );
}

export default function LibraryPanel({ items, onClose, onDelete, onSearch, onGoToSession, focusItemId }: LibraryPanelProps) {
  const [selectedId, setSelectedId] = useState<string | null>(focusItemId ?? null);
  const [viewMode, setViewMode] = useState<"list" | "cards">("cards");
  const [searchQuery, setSearchQuery] = useState("");
  const searchTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const detailPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (focusItemId) setSelectedId(focusItemId);
  }, [focusItemId]);

  // Close on Escape — close detail first, then library
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedId) {
          setSelectedId(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, selectedId]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setSearchQuery(q);
    clearTimeout(searchTimerRef.current);
    searchTimerRef.current = setTimeout(() => onSearch(q), 300);
  }, [onSearch]);

  const handleDelete = useCallback((id: string) => {
    onDelete(id);
    if (selectedId === id) setSelectedId(null);
  }, [onDelete, selectedId]);

  const selectedItem = selectedId ? items.find((i) => i.id === selectedId) : null;

  // Resize detail panel
  const [detailWidth, setDetailWidth] = useState<number | null>(null);
  const onResizePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = detailPanelRef.current?.offsetWidth || 500;
    const onMove = (ev: PointerEvent) => {
      const newWidth = Math.max(280, Math.min(startWidth - (ev.clientX - startX), window.innerWidth - 400));
      setDetailWidth(newWidth);
    };
    const onUp = () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
    };
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
  }, []);

  return (
    <div className={`library-panel${selectedItem ? " with-detail" : ""}`}>
      {/* Main list area */}
      <div className="library-main">
        <div className="library-panel-header">
          <span className="library-panel-title">Library</span>
          <input
            className="library-search"
            type="text"
            placeholder="Search saved items..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="library-view-toggle">
            <button
              className={viewMode === "list" ? "active" : ""}
              onClick={() => setViewMode("list")}
              title="List view"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
            <button
              className={viewMode === "cards" ? "active" : ""}
              onClick={() => setViewMode("cards")}
              title="Card view"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </button>
          </div>
          <button className="library-close-btn" onClick={onClose} title="Close (Esc)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="library-panel-body">
          {items.length === 0 ? (
            <div className="library-empty">
              {searchQuery ? "No results found" : "No saved items yet"}
              <p>Save diagrams from your conversations using the bookmark icon on diagram cards.</p>
            </div>
          ) : viewMode === "list" ? (
            <div className="library-list">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`library-list-item${selectedId === item.id ? " selected" : ""}`}
                  onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                >
                  <span className="library-list-icon"><TypeIcon type={item.contentType} /></span>
                  <div className="library-list-info">
                    <span className="library-list-title">{item.title}</span>
                    <span className="library-list-meta">
                      {TYPE_LABELS[item.contentType] || item.contentType}
                      {item.sourceConversationTitle && <> &middot; {item.sourceConversationTitle}</>}
                      {" "}&middot; {formatDate(item.createdAt)}
                    </span>
                  </div>
                  <button
                    className="library-list-delete"
                    onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                    title="Delete"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="library-cards">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`library-card${selectedId === item.id ? " selected" : ""}`}
                  onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                >
                  <div className="library-card-preview">
                    {item.contentType === "diagram" && item.svg ? (
                      <div className="library-card-svg" dangerouslySetInnerHTML={{ __html: item.svg }} />
                    ) : (
                      <div className="library-card-text">
                        {item.content.slice(0, 200)}
                      </div>
                    )}
                  </div>
                  <div className="library-card-footer">
                    <span className="library-card-icon"><TypeIcon type={item.contentType} /></span>
                    <span className="library-card-title">{item.title}</span>
                    <button
                      className="library-card-delete"
                      onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                      title="Delete"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detail panel (right side) */}
      {selectedItem && (
        <div className="library-detail" ref={detailPanelRef} style={detailWidth ? { width: detailWidth } : undefined}>
          <div className="library-detail-resize" onPointerDown={onResizePointerDown} />
          <div className="library-detail-header">
            <div className="library-detail-title-row">
              <span className="library-detail-icon"><TypeIcon type={selectedItem.contentType} /></span>
              <span className="library-detail-title">{selectedItem.title}</span>
            </div>
            <div className="library-detail-actions">
              {selectedItem.sourceConversationId && (
                <button
                  className="library-detail-goto"
                  onClick={() => onGoToSession(selectedItem.sourceConversationId!)}
                  title={selectedItem.sourceConversationTitle ? `Go to "${selectedItem.sourceConversationTitle}"` : "Go to session"}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </button>
              )}
              <button
                className="library-detail-delete"
                onClick={() => handleDelete(selectedItem.id)}
                title="Delete item"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
              <button
                className="library-detail-close"
                onClick={() => setSelectedId(null)}
                title="Close panel"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          <div className="library-detail-meta">
            {TYPE_LABELS[selectedItem.contentType] || selectedItem.contentType}
            {selectedItem.sourceConversationTitle && selectedItem.sourceConversationId && (
              <> &middot; from <a
                className="library-detail-session-link"
                onClick={(e) => { e.preventDefault(); onGoToSession(selectedItem.sourceConversationId!); }}
              >{selectedItem.sourceConversationTitle}</a></>
            )}
            {" "}&middot; {formatDate(selectedItem.createdAt)}
          </div>
          {selectedItem.contentType === "diagram" && selectedItem.svg ? (
            <LibraryDiagramDetail svg={selectedItem.svg} />
          ) : (
            <div className="library-detail-body">
              <div className="message-content">
                <Markdown remarkPlugins={[remarkGfm]}>{selectedItem.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
