import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoryContext = createContext();

export const StoryProvider = ({children}) => {
const [stories, setStories] = useState([])
const baseUrl = "http://localhost:3001/api/stories";

const fetchStories = async ()=>{
    try {
        const res = await axios.get(baseUrl);
        setStories(res.data)
    } catch (error) {
        console.error('Error fetching stories', error)
    }
}



useEffect(()=>{
    fetchStories()
},[])
    return (
        <StoryContext.Provider value={{stories}}>
            {children}
        </StoryContext.Provider>
    )
}
