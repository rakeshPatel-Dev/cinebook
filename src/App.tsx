import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Booking from './pages/Booking'
import ConfirmBooking from './pages/ConfirmBooking'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import Movie from './pages/Movie'
import Booked from './pages/Booked'
import NotFound from './pages/NotFound'
import { LottieAmination } from './components/ui/dotLottie'
import SignIn from './pages/SignIn'
import MyBookings from './pages/MyBookings'

const App = () => {
  const location = useLocation()  // get current route

  // list of routes where header/footer should NOT show
  const hideHeaderFooter = ['/signin']


  const shouldHide = hideHeaderFooter.includes(location.pathname)

  return (
    <div>
      <ToastContainer theme='dark' position='top-center'/>

      {!shouldHide && <Header/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/confirm-booking' element={<ConfirmBooking/>}/>
        <Route path='/payment/success' element={<Booked/>}/>
        <Route path='/movies/:id' element={<Movie/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/lottie' element={<LottieAmination/>}/>
      </Routes>

      {!shouldHide && <Footer/>}
    </div>
  )
}

export default App
