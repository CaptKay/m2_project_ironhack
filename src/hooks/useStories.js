import { useContext } from "react";
import StoriesContext from "../context/StoryContext";

export default function useStories() {
  const context = useContext(StoriesContext);
  if (!context) throw new Error("useStories must be used within a StoriesProvider");
  return context;
}
