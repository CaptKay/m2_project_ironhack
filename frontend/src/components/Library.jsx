// import axios from "axios";
// import { useEffect, useLayoutEffect, useState } from "react";

import { useContext } from "react";
import { StoryContext } from "../context/StoryContext";
import {Link, Links} from "react-router-dom"

const Library = () => {
  const {stories, deleteStory} = useContext(StoryContext)
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3001/api/stories");
  //       setBooks(res.data);
  //     } catch (error) {
  //       console.error("Error fetching books", error);
  //     }
  //   };
  //   fetchBooks()
  // }, []);
  return (
 <div>
  <h2>Story Library</h2>
  {stories.length === 0 ? (<p>Loading stories...</p>) : (<ul>
    {stories.map((Story)=>(
      <li key={Story.id}>
        <strong>{Story.title}</strong> by {Story.author}<br />
        <em>{Story.genre}</em><br />
        <p>{Story.description
          }</p>
          <Link to={`/stories/${Story.id}`}>
          <button>Read</button>
          </Link>
           <button onClick={()=>deleteStory(Story.id)}>Delete</button>
      </li>
    ))}
  </ul>)}
 </div>
  );
};
export default Library;
