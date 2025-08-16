
```markdown
# 📚 Mystic Stories App

A clean, mobile-friendly web app for writing, editing, and browsing stories—built with React (Vite) and JSON Server. Features genre tagging, cover images, and a beautiful user interface.  
**Frontend:** Netlify | **Backend API:** Render.com

---

## ✨ Features

- **Create, Edit, Delete Stories**
- **Multi-genre** assignment per story
- **Upload a cover image** (powered by [Cloudinary])
- **Responsive UI**—looks great on any device
- **Modern, accessible design**
- **Instant API update** thanks to JSON Server

---

## 🚀 Live Demo

- **Frontend:** [your-netlify-site.netlify.app](https://your-netlify-site.netlify.app)
- **Backend API:** [your-json-server.onrender.com](https://your-json-server.onrender.com)

---

## 🛠️ Usage

1. **Browse Stories**  
   The Home page lists all stories with covers, genres, and descriptions.

2. **View Story**  
   Click any story for a centered, focused reading experience.

3. **Create a Story**  
   - Click **New Story**
   - Fill in title, description, genres (multiple allowed), content, and upload a cover image.
   - Click **Create Story**
   
4. **Edit or Delete**  
   - On any story page, use **Edit** to update, or **Delete** to remove a story.

---

## ⚙️ Developer Setup

### 1. Clone This Repo

```
git clone https://github.com/CaptKay/m2_project_ironhack.git
cd m2_project_ironhack.git
```

### 2. Install Frontend

```
npm install
```

### 3. Backend Setup

- The API is deployed, but you can run JSON Server locally:
    ```
    npm install -g json-server
    json-server --watch db.json --port 3001
    ```

### 4. Frontend Environment

- Create a `.env` file:
    ```
    VITE_API_BASE_URL=https://your-json-server.onrender.com
    VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
    VITE_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
    ```

### 5. Run Frontend Dev Server

```
npm run dev
```
App runs at [http://localhost:5173] by default.

---

## 🗄️ API Reference

Stories are available at:

```
GET    /stories
POST   /stories
PUT    /stories/:id
DELETE /stories/:id
```

Story object example:

```
{
  "id": "uuid",
  "title": "The Mystic Sword",
  "description": "A tale of ancient power.",
  "content": "...",
  "coverImage": "https://res.cloudinary.com/...",
  "status": "published",
  "genres": ["Fantasy", "Adventure"],
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

## 🎨 Tech Stack

- [React (Vite)](https://vitejs.dev/)
- [JSON Server](https://github.com/typicode/json-server)
- [Netlify](https://www.netlify.com/)
- [Render.com](https://render.com/)
- [Cloudinary](https://cloudinary.com/) (image hosting)
- [Lucide Icons](https://lucide.dev/) (SVG icons)

---

## 📦 Deployment

- **Frontend:** Pushed to GitHub and auto-deployed to Netlify (see [Netlify Docs](https://docs.netlify.com/))
- **API:** `db.json` and JSON Server instance deployed on Render.com (see [Render JSON Server Guide](https://render.com/docs/deploy-json-server))

---

## 📱 Responsive Design

- Fully mobile-first
- Touch-friendly controls
- Clean list/grid/card layouts

---

## 🙏 Credits

- Inspired by [Netlify](https://www.netlify.com/) and [Render.com](https://render.com/) starter setups

---

## 📝 License

[MIT](./LICENSE)

---

**Replace repo/API URLs and Cloudinary values with your own where applicable.**  
This README is ready-made for onboarding contributors, testers, or even users!
```
