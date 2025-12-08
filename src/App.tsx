import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import MoviePage from './pages/MoviePage'
import Header from './components/Header'
import BookMovie from './pages/BookMovie'

const App = () => {
  return (
    <div>


      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies/:id' element={<BookMovie/>}/>
      </Routes>
      
    </div>
  )
}

export default App
