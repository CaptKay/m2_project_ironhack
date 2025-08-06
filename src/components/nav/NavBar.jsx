import { NavLink } from "react-router-dom";
import { BookOpen, Plus } from "lucide-react";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/" end className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
        <BookOpen size={18} style={{ marginBottom: -2, marginRight: 3 }} />
        Home
      </NavLink>
      <NavLink to="/create" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
        <Plus size={18} style={{ marginBottom: -2, marginRight: 3 }} />
        New Story
      </NavLink>
    </nav>
  );
}
