import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Images from './pages/Images'
import ImageDeatails from './pages/ImageDetails'

function App() {
  

  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Images/>} />
    <Route path="/photo/:id" element={<ImageDeatails/>} />
    </Routes>
    </Router>
      
    </>
  )
}

export default App
