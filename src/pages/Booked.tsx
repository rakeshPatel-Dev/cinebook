import { BadgeCheck } from 'lucide-react'
// import { useLocation } from 'react-router-dom';


// interface LocationState {
//     id: string;
//     title: string;
//     director: string;
//     poster: string;
//     genres: string[];
  
// }

const Booked = () => {

  //  const { state } = useLocation();
  // const movieData = state as LocationState;

  // console.log(movieData);


  return (
    <div className='dark:bg-[#121212]'>
      <main className="flex flex-col max-w-4xl mx-auto w-full flex-1 justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-16">
    <div className="mb-8 flex flex-col items-center gap-4 text-center">
      <div className="flex p-2 items-center justify-center rounded-full bg-[#10b981]/10 text-[#10b981]">
        <BadgeCheck size={80}/>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white md:text-4xl">
          Booking Confirmed!
        </p>
        <p className="text-base font-normal leading-normal text-gray-500 dark:text-gray-400">
          Your payment was successful. A confirmation email has been sent to
          your address.
        </p>
      </div>
    </div>
    <div className="rounded-xl border border-gray-200/50 dark:border-white/10 bg-white dark:bg-[#121212]/50 p-6 sm:p-8">
      <div className="flex flex-col items-start gap-6 sm:flex-row">
        <div className="w-full sm:w-1/4">
          <div
            className="aspect-[2/3] w-full rounded-lg bg-cover bg-center bg-no-repeat"
            data-alt="Movie poster for Dune: Part Two"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2VISIm8kcVYUI9aEN0PqBJ6bDh-04uryEAYDG79dN-ZiOSYQZoeE7yjHczOrTC2GT_6_Pzx9-4JBlzQFZ838CME0bf93lw9--6ZOm0BIGL-J9V-py2XFn62SSPGmAlBfuUbkB1v6fjoZNoaqZLYLy-t_qTp53ihzUl_WW4K0NTg33ROaSolZV_aFOlYKpXvaQ9dAeHQQphVb08i9Xf-tegmyBueLoMbSYQVSzsvIDVjYxs6FbLzp7Usy27LJ5FS2FZ-l6J12X_aA")'
            }}
          />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <div>
            <p className="text-sm font-normal leading-normal text-gray-500 dark:text-gray-400">
              PG-13
            </p>
            <p className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Dune: Part Two
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-xl">
                calendar_today
              </span>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Friday, March 15, 2024
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-xl">
                schedule
              </span>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                7:30 PM
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-xl">
                theaters
              </span>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Cinema World, Downtown
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-xl">
                chair
              </span>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Screen 3, Seats: G5, G6
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-gray-200/50 dark:border-white/10" />
          <div className="rounded-lg bg-gray-100 dark:bg-white/5 p-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Confirmation Number
            </p>
            <p className="text-lg font-bold tracking-widest text-gray-900 dark:text-white">
              BKNG-843K2L9
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <button className="flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#ec1337] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#ec1337]/90">
        <span className="material-symbols-outlined mr-2">
          confirmation_number
        </span>
        <span className="truncate">View E-Tickets</span>
      </button>
      <button className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-200/80 dark:bg-white/10 text-gray-900 dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-300/80 dark:hover:bg-white/20">
        <span className="truncate">Go to My Bookings</span>
      </button>
    </div>
</main>

    </div>
  )
}

export default Booked
