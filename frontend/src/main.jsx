import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { StoryProvider } from "./context/StoryContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoryProvider>
  </StrictMode>
);
