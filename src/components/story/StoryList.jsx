import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function StoryList({ stories }) {
  return (
    <ul>
      {stories.map(story => (
        <li key={story.id} className="story-card">
          {story.coverImage && (
            <img src={story.coverImage} alt={`${story.title} cover`} style={{ width: "170px" }} />
          )}
          <h2><BookOpen size={24} style={{marginBottom:-5, marginRight:6}} />{story.title}</h2>
          {story.genres && story.genres.map(g => (
            <span key={g} className="genre-label">{g}</span>
          ))}
          {/* <div>
            <span style={{ float: "right" }}>
              <small>[{story.status}]</small>
            </span>
          </div> */}
          <p><i>{story.description}</i></p>
          <p>
            <Link to={`/story/${story.id}`}>Read story &rarr;</Link>
          </p>
        </li>
      ))}
    </ul>
  );
}
