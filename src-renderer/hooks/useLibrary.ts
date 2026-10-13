import { useState, useEffect, useCallback } from "react";

interface LibraryItem {
  id: string;
  title: string;
  content: string;
  contentType: "response" | "code" | "diagram" | "table";
  svg?: string;
  sourceConversationId?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export function useLibrary() {
  const [items, setItems] = useState<LibraryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    if (!window.lscApi?.listLibraryItems) return;
    const list = await window.lscApi.listLibraryItems();
    setItems(list);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const saveItem = useCallback(
    async (input: {
      title: string;
      content: string;
      contentType: LibraryItem["contentType"];
      svg?: string;
      sourceConversationId?: string;
      tags?: string[];
    }) => {
      if (!window.lscApi?.saveLibraryItem) return;
      const item = await window.lscApi.saveLibraryItem(input);
      setItems((prev) => [item, ...prev]);
      return item;
    },
    []
  );

  const deleteItem = useCallback(
    async (id: string) => {
      if (!window.lscApi?.deleteLibraryItem) return;
      setItems((prev) => prev.filter((i) => i.id !== id));
      await window.lscApi.deleteLibraryItem(id);
    },
    []
  );

  const search = useCallback(async (query: string) => {
    if (!window.lscApi?.searchLibraryItems) return;
    if (!query.trim()) {
      refresh();
      return;
    }
    const results = await window.lscApi.searchLibraryItems(query);
    setItems(results);
  }, [refresh]);

  return { items, loading, saveItem, deleteItem, search, refresh };
}
