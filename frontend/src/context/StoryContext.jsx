import { createContext, useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
  const [stories, setStories] = useState([]);
  const baseUrl = "http://localhost:3001/api/stories";

  const fetchStories = async () => {
    try {
      const res = await axios.get(baseUrl);
      setStories(res.data);
    } catch (error) {
      console.error("Error fetching stories", error);
    }
  };

  const addStory = async (newStory) => {
    try {
      const res = await axios.post(baseUrl, newStory);
      setStories((prev) => [res.data, ...prev]);
    } catch (error) {
      console.error("Failed to add a story", error);
    }
  };

  const updateStory = async (id, updatedStory) => {
    try {
        const res = await axios.put(`${baseUrl}/${id}`, updatedStory)
        setStories((prev)=> prev.map((story)=> (story.id === id ? res.data : story)))
    } catch (error) {
        console.error('Failed to update story', error)
    }
  };

  const deleteStory = async (id) =>{
    try {
        await axios.delete(`${baseUrl}/${id}`)
        setStories((prev)=> prev.filter((story)=> story.id !== id))
    } catch (error) {
        console.error('Failed to delete story', error)
    }
  }

  useEffect(() => {
    fetchStories();
  }, []);
  return (
    <StoryContext.Provider value={{ stories, addStory, updateStory, deleteStory }}>
      {children}
    </StoryContext.Provider>
  );
};
