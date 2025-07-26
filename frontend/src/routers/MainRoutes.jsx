import {Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AddStoryPage from '../pages/AddStoryPage'
import NotFoundPage from '../pages/NotFoundPage'
import EditStoryPage from '../pages/EditStoryPage'
import StoryPage from '../pages/StoryPage'

const MainRoutes = () => {
  return (
    
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/stories/:storyId' element={<StoryPage />} />
        <Route path='/add-story' element={<AddStoryPage />} />
        <Route path='/edit-story' element={<EditStoryPage />} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
export default MainRoutes