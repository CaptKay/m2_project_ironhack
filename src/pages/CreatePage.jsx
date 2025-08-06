import useStories from "../hooks/useStories";
import StoryForm from "../components/story/StoryForm";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  const { createStory } = useStories();
  const navigate = useNavigate();

  const handleCreate = async (story) => {
    await createStory(story);
    navigate("/");
  };

  return (
    <div>
      <h2>Create New Story</h2>
      <StoryForm onSubmit={handleCreate} />
    </div>
  );
}
