import useStories from "../hooks/useStories";
import StoryForm from "../components/story/StoryForm";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPage() {
  const { id } = useParams();
  const { stories, updateStory } = useStories();
  const navigate = useNavigate();
  const story = stories.find(s => s.id === id);
  if (!story) return <div>Story not found</div>;

  const handleEdit = async (updatedStory) => {
    await updateStory(updatedStory);
    navigate(`/story/${updatedStory.id}`);
  };

  return (
    <div>
      <h2>Edit Story</h2>
      <StoryForm initial={story} onSubmit={handleEdit} />
    </div>
  );
}
