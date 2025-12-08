import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Booking from './pages/Booking'
import ConfirmBooking from './pages/ConfirmBooking'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import Movie from './pages/Movie'
import Booked from './pages/Booked'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <ToastContainer/>

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/confirm-booking' element={<ConfirmBooking/>}/>
        <Route path='/payment/success' element={<Booked/>}/>
        <Route path='/movies/:id' element={<Movie/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
