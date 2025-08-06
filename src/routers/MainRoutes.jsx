import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreatePage from "../pages/CreatePage";
import EditPage from "../pages/EditPage";
import ViewPage from "../pages/ViewPage";
import "../styles/main.css";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/story/:id" element={<ViewPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
};
export default MainRoutes;
