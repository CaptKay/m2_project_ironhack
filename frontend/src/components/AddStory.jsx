import uuid4 from "uuid4";
import { useContext, useState } from "react";
import { StoryContext } from "../context/StoryContext";
import { useNavigate } from "react-router-dom";

const AddStory = () => {
  const navigate = useNavigate();
  const { addStory } = useContext(StoryContext);
  const [formData, setFormData] = useState({
    id: uuid4(),
    title: " ",
    author: " ",
    description: "",
    genre: "Fantasy",
    isUserCreated: "true",
    scenes: {},
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const val = type === "checked" ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  
  console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault();
    addStory(formData);
    setFormData({
      title: " ",
      author: " ",
      description: "",
      genre: "Fantasy",
      isUserCreated: "false",
      scenes: {},
    });
    navigate("/")
  };

  return (
    <>
      <div>AddStory</div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            // value={formData.title}
            placeholder="Title"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Author
          <input
            type="text"
            name="author"
            // value={formData.author}
            placeholder="Author"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            // value={formData.description}
            placeholder="Description"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default AddStory;
