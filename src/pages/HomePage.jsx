import useStories from "../hooks/useStories";
import StoryList from "../components/story/StoryList";

export default function HomePage() {
  const { stories, loading } = useStories();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="homepage">
      <h1 className="homepage-title">Mystic Stories</h1>
      <div className="homepage-subtitle">Read and share magical tales</div>
      <div className="story-list grid">
        <StoryList stories={stories} />
      </div>
    </div>
  );
}
