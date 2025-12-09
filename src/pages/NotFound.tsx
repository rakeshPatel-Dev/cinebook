import {  useNavigate } from 'react-router-dom'
import { AnimatedError } from '../components/ui/error'

const NotFound = () => {

  const navigate = useNavigate()

  return (
    <div>
      <main className="dark:bg-[#121212] grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col items-center gap-8 text-center max-w-2xl">
    <div className="flex flex-col items-center gap-6">
      <div className="w-full max-w-sm">
        <AnimatedError/>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] text-zinc-900 dark:text-white">
          Oops! The Reel Seems to be Missing.
        </p>
        <p className="text-sm font-normal leading-normal max-w-md text-zinc-600 dark:text-zinc-400">
          We couldn't find the page you were looking for. It might have been
          moved, or perhaps it's on a popcorn break.
        </p>
      </div>
      <button
      onClick={() => {
        navigate("/")
      }}
      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#ec1337] hover:bg-[#ec1337]/90 text-white text-base font-bold leading-normal tracking-[0.015em]">
        <span className="truncate">Back to the Movies</span>
      </button>
    </div>
  </div>
</main>

    </div>
  )
}

export default NotFound
