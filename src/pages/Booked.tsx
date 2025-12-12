import { CalendarCheck, CalendarClock, MapPinHouse, Sofa, TicketCheck } from 'lucide-react';
import { useLocation, useNavigate } from "react-router-dom";
import { LottieAmination } from '../components/ui/dotLottie';
import { toast, ToastContainer } from 'react-toastify';

interface LocationState {
  movie: {
    id: string;
    title: string;
    director?: string;
    poster?: string;
    genres?: string[];
  };
  seats: string[];
  formattedDate: string;
  time: string;
}

const Booked = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = state as LocationState | undefined;

  if (!data || !data.movie) {
    return (
      <div className="text-center pt-40 text-3xl text-white">
        No booking data found 😢
      </div>
    );
  }

  const handleMyBookings = () => {
    navigate("/my-bookings",{
      state: {
        movie,
        seats,
        formattedDate,
        time,
      }
    })

  }

  const { movie, seats, formattedDate, time } = data;

  // Generate random confirmation number
  const confirmationNumber = `BKNG-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

  return (
    <div className='dark:bg-[#121212] min-h-screen'>
      <main className="flex flex-col max-w-4xl mx-auto w-full flex-1 justify-center px-4 sm:px-6 lg:px-8 py-4">
        <ToastContainer position='top-center'/>
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          {/* <div className="flex p-2 items-center justify-center rounded-full bg-[#10b981]/10 text-[#10b981]">
            <BadgeCheck size={80} />
          </div> */}
          <LottieAmination/>
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white md:text-4xl">
              Booking Confirmed!
            </p>
            <p className="text-base font-normal leading-normal text-gray-500 dark:text-gray-400">
              Your payment was successful. A confirmation email has been sent to your address.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200/50 dark:border-white/10 bg-white dark:bg-[#121212]/50 p-6 sm:p-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row">
            <div className="w-full sm:w-1/4">
              <div
                className="aspect-2/3 w-full rounded-lg bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${movie.poster || 'https://via.placeholder.com/300x450'})` }}
              />
            </div>

            <div className="flex flex-1 flex-col gap-6">
              <div>
                <p className="text-sm font-normal leading-normal text-gray-500 dark:text-gray-400">
                  {movie.genres?.join(", ") || "PG-13"}
                </p>
                <p className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  {movie.title}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <CalendarCheck className='text-white'/>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {formattedDate}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarClock className='text-white'/>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {time}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinHouse className='text-white'/>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Cinema World, Downtown
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Sofa className='text-white'/>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Seats: {seats.join(", ")}
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-gray-200/50 dark:border-white/10" />

              <div className="rounded-lg bg-gray-100 dark:bg-white/5 p-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Confirmation Number</p>
                <p className="text-lg font-bold tracking-widest text-gray-900 dark:text-white">
                  {confirmationNumber}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            className="flex gap-2 w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#ec1337] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#ec1337]/90"
            onClick={() => toast("E-Tickets page coming soon!",{theme:'dark',closeOnClick:true})}
          >
            <TicketCheck/>
            <span className="truncate">View E-Tickets</span>
          </button>
          <button
            className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-200/80 dark:bg-white/10 text-gray-900 dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-300/80 dark:hover:bg-white/20"
            onClick={() => handleMyBookings()}
          >
            <span className="truncate">Go to My Bookings</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Booked;
