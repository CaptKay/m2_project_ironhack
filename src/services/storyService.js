import api from "./api";
import { v4 as uuidv4 } from "uuid";

export const getStories = () => api.get("stories");
export const createStory = (story) => {
  const now = new Date().toISOString();
  return api.post("stories", { id: uuidv4(), ...story, createdAt: now, updatedAt: now });
};
export const updateStory = (id, story) => {
  const now = new Date().toISOString();
  return api.put(`stories/${id}`, { ...story, updatedAt: now });
};
export const deleteStory = (id) => api.delete(`stories/${id}`);
