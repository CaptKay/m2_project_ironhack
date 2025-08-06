import { createContext, useState, useEffect, useCallback } from "react";
import * as storyService from "../services/storyService";


const StoriesContext = createContext();

export function StoriesProvider({ children }) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [storyError, setStoryError] = useState(null);

  useEffect(() => {
    async function fetchStories() {
      setLoading(true);
      setStoryError(null);
      try {
        const res = await storyService.getStories();
        setStories(res.data);
      } catch (err) {
        setStoryError("Failed to fetch stories.", err);
      } finally {
        setLoading(false);
      }
    }
    fetchStories();
  }, []);

  const createStory = useCallback(async (story) => {
    setStoryError(null);
    try {
      const res = await storyService.createStory(story);
      setStories(prev => [...prev, res.data]);
    } catch (err) {
      setStoryError("Failed to create story.", err);
    }
  }, []);

  const updateStory = useCallback(async (updated) => {
    setStoryError(null);
    try {
      await storyService.updateStory(updated.id, updated);
      setStories(prev => prev.map(s => s.id === updated.id ? updated : s));
    } catch (err) {
      setStoryError("Failed to update story.", err);
    }
  }, []);

  const deleteStory = useCallback(async (id) => {
    setStoryError(null);
    try {
      await storyService.deleteStory(id);
      setStories(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      setStoryError("Failed to delete story.", err);
    }
  }, []);

  return (
    <StoriesContext.Provider value={{
      stories, loading, createStory, updateStory, deleteStory, storyError
    }}>
      {children}
    </StoriesContext.Provider>
  );
}

export default StoriesContext;
