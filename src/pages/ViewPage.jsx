import useStories from "../hooks/useStories";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Edit, Trash2 } from "lucide-react";

export default function ViewPage() {
  const { id } = useParams();
  const { stories, deleteStory } = useStories();
  const navigate = useNavigate();
  const story = stories.find(s => s.id === id);
  if (!story) return <div>Not found</div>;

  const handleDelete = async () => {
    await deleteStory(story.id);
    navigate("/");
  };

  return (
    <div className="story-view">
  <div className="card">
    <div className="story-header">
      <h1>{story.title}</h1>
      <div className="genres">
        {story.genres && story.genres.map(g => (
          <span key={g} className="genre">{g}</span>
        ))}
      </div>
    </div>
    
    {story.coverImage && <img src={story.coverImage} alt="cover" />}
    
    <div className="story-meta">
      <span className={`status status-${story.status}`}>{story.status}</span>
      <span>{new Date(story.createdAt).toLocaleDateString()}</span>
    </div>
    
    <div className="story-content">
      <p>{story.content}</p>
    </div>
    
    <div className="story-actions">
      <Link to={`/edit/${story.id}`} className="btn btn-secondary">
        <Edit size={16} /> Edit
      </Link>
      <button onClick={handleDelete} className="btn btn-danger">
        <Trash2 size={16} /> Delete
      </button>
    </div>
  </div>
</div>

  );
}
