import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Word from './components/Word'
import WordColor from './components/WordColor'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/:word" element={<Word/>} />
          <Route path="/:word/:fcolor/:bcolor" element={<WordColor/>} />
          <Route path="/*" element={<h3>404 Not Found</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
