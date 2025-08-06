import useStories from "../hooks/useStories";
import StoryList from "../components/story/StoryList";



export default function HomePage() {
  const { stories, loading } = useStories();
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1 className="centered">Mystic Tale Library</h1>
      <StoryList stories={stories} />
    </div>
  );
}
