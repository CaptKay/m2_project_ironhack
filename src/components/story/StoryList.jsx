import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function StoryList({ stories }) {
  return (
    <div className="story-list">
      {stories.map(story => (
        <div key={story.id} className="story-card">
          {story.coverImage && (
            <img
              src={story.coverImage}
              alt={`${story.title} cover`}
              // let CSS control sizes: no inline style needed
            />
          )}
          <div className="story-card-content">
            <h2 className="story-card-title">
              <BookOpen size={22} style={{ marginBottom: -4, marginRight: 6 }} />
              {story.title}
            </h2>
            <div className="genres">
              {story.genres && story.genres.map(g => (
                <span key={g} className="genre">{g}</span>
              ))}
            </div>
            <p className="story-card-desc">
              <i>{story.description}</i>
            </p>
            <div className="story-card-footer">
              <Link to={`/story/${story.id}`} className="story-link">
                Read story &rarr;
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
