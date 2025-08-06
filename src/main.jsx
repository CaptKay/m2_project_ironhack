import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { StoriesProvider } from "./context/StoryContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <StoriesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoriesProvider>
  </StrictMode>
);
