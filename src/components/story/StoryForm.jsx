import { useState, useEffect } from "react";
import { uploadImageToCloudinary } from "../../utils/cloudinary";

const GENRES = [
  "Fantasy", "Science Fiction", "Mystery", "Romance",
  "Historical", "Horror", "Literary", "Adventure", "Other"
];

export default function StoryForm({ initial = {}, onSubmit }) {
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");
  const [content, setContent] = useState(initial.content || "");
  const [coverImage, setCoverImage] = useState(initial.coverImage || "");
  const [status, setStatus] = useState(initial.status || "draft");
  const [genres, setGenres] = useState(initial.genres || []);
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setTitle(initial.title || "");
    setDescription(initial.description || "");
    setContent(initial.content || "");
    setCoverImage(initial.coverImage || "");
    setStatus(initial.status || "draft");
    setGenres(initial.genres || []);
  }, [initial?.id]);

  const toggleGenre = (genre) => {
    setGenres(gs => gs.includes(genre) ? gs.filter(g => g !== genre) : [...gs, genre]);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
    setCoverImage("");
  };

  const handleImageUpload = async () => {
    if (!imageFile) return;
    setUploading(true);
    try {
      const url = await uploadImageToCloudinary(imageFile);
      setCoverImage(url);
      alert("Image uploaded! You can submit the story now.");
    } catch {
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...initial,
      title, description, content, coverImage, status, genres
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <label>Title</label>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />

      <label>Description</label>
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Short summary" required />

      <label>Cover Image</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageFile && (
        <button type="button" onClick={handleImageUpload} disabled={uploading}>
          {uploading ? "Uploading..." : "Upload to Cloudinary"}
        </button>
      )}
      {coverImage && <img src={coverImage} alt="cover" style={{ width: 120, margin: "1em 0" }} />}

      <label>Content</label>
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Main story content"
        rows={7}
        required
      />

      <label>Status</label>
      <select value={status} onChange={e => setStatus(e.target.value)} required>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
        <option value="archived">Archived</option>
      </select>

      <label><b>Genres:</b></label>
      <div style={{ marginBottom: "1em" }}>
        {GENRES.map(g => (
          <label key={g} style={{ marginRight: "1em", fontWeight: "normal" }}>
            <input
              type="checkbox"
              checked={genres.includes(g)}
              onChange={() => toggleGenre(g)}
            />
            {g}
          </label>
        ))}
      </div>

      <button type="submit" disabled={uploading}>
        {initial && initial.id ? "Update Story" : "Create Story"}
      </button>
    </form>
  );
}
