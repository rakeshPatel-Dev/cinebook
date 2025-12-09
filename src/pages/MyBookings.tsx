import React from 'react'

const MyBookings = () => {
  return (
    <div className='dark:bg-[#121212]'>
      <div className="relative max-w-6xl mx-auto flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <main className="flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
              My Bookings
            </h1>
          </div>
          <div className="pb-3">
            <div className="flex border-b border-white/10 dark:border-[#543b3f] px-4 gap-8">
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-[#ec1337] text-white pb-[13px] pt-4"
                href="#"
              >
                <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  Upcoming
                </p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#b99da1] hover:text-white/90 pb-[13px] pt-4"
                href="#"
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                  Past
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 py-6">
            {/* Booking Card 1 */}
            <div className="px-4">
              <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6 rounded-lg bg-white/5 dark:bg-[#271c1d] p-4 shadow-lg">
                <div
                  className="w-full sm:w-32 md:w-40 bg-center bg-no-repeat aspect-[2/3] bg-cover rounded-lg flex-shrink-0"
                  data-alt="Movie poster for Dune: Part Two"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG3k5uURb5hpCMXpGfDMUKs3ib8NZXSY8gKWn8VrwngF6GiTg5iy8p6gMISOc41049X727j9goX5mr8iGtH_X8m0c2D1VcpJ_LFzNFgp9hkQ2oSLwBsZByCro0QjI4JBB3XBmQinIoALjtqHj2YjxGWNSRaVGWim1WnA4N1q42p1yck2hlyG1qVpVoFLiBjGFqgcVQsjq81m6IZ5cvj2kum4IIY6To_s0NM8FKiJM1XzXZFhdhrvQ2w1SexYpODJ3lTAVwQlA5UdU")'
                  }}
                />
                <div className="flex flex-1 flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3">
                      <p className="text-white text-xl font-bold leading-tight">
                        Dune: Part Two
                      </p>
                      <span className="text-xs font-bold text-green-300 bg-green-500/20 px-2.5 py-1 rounded-full">
                        Confirmed
                      </span>
                    </div>
                    <p className="text-[#b99da1] text-sm font-normal leading-normal">
                      FRI, NOV 3, 2024 @ 7:30 PM
                    </p>
                    <p className="text-white/90 text-sm font-normal leading-normal">
                      AMC Metreon 16, IMAX
                    </p>
                    <p className="text-[#b99da1] text-sm font-normal leading-normal pt-1">
                      Seats: F12, F13
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-auto">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[#ec1337] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#ec1337]/90 transition-colors">
                      <span className="truncate">View E-Ticket</span>
                    </button>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-transparent border border-white/20 text-white/80 hover:bg-white/10 text-sm font-medium leading-normal transition-colors">
                      <span className="truncate">Cancel Booking</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Booking Card 2 */}
            <div className="px-4">
              <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6 rounded-lg bg-white/5 dark:bg-[#271c1d] p-4 shadow-lg">
                <div
                  className="w-full sm:w-32 md:w-40 bg-center bg-no-repeat aspect-[2/3] bg-cover rounded-lg flex-shrink-0"
                  data-alt="Movie poster for Oppenheimer"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWrxkcTDuGaY6dknpMyLvEruqkvyt-0AMzTlz9fkUBQyLzmaTExRvlulc9ZfazN-K0YC6Ttr3Qg_uFW-4Xp6RG_4_NEKRt0ZCSG4gCZXOxTuKrbG98Fz6KIVoMnE8LlSwyAACvaIofSjodWBsgNJ7wKGp6TU6P_EZHNkpZmfhT7Tj7c9UI1uF1Dy0UDSQp1YysGyDba92bu8nMAwzQyvfMwxGbQXBafkXWbYoZwtdSGqo2EM_wcUiue5xEPiJnYc2PhgMuEysxink")'
                  }}
                />
                <div className="flex flex-1 flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3">
                      <p className="text-white text-xl font-bold leading-tight">
                        Oppenheimer
                      </p>
                      <span className="text-xs font-bold text-green-300 bg-green-500/20 px-2.5 py-1 rounded-full">
                        Confirmed
                      </span>
                    </div>
                    <p className="text-[#b99da1] text-sm font-normal leading-normal">
                      SAT, NOV 18, 2024 @ 9:00 PM
                    </p>
                    <p className="text-white/90 text-sm font-normal leading-normal">
                      Cinemark Century 20, Dolby Cinema
                    </p>
                    <p className="text-[#b99da1] text-sm font-normal leading-normal pt-1">
                      Seats: G8, G9, G10
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-auto">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[#ec1337] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#ec1337]/90 transition-colors">
                      <span className="truncate">View E-Ticket</span>
                    </button>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-transparent border border-white/20 text-white/80 hover:bg-white/10 text-sm font-medium leading-normal transition-colors">
                      <span className="truncate">Cancel Booking</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Empty State Example */}
            <div className="px-4 pt-10">
              <div className="flex flex-col items-center justify-center gap-6 rounded-lg border-2 border-dashed border-white/10 dark:border-[#39282b] p-12 text-center">
                <span className="material-symbols-outlined text-5xl text-[#b99da1]">
                  movie
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-white text-lg font-bold leading-tight">
                    No past bookings yet
                  </p>
                  <p className="text-[#b99da1] text-sm font-normal leading-normal max-w-sm">
                    Looks like your movie history is empty. Book a ticket to
                    start your collection!
                  </p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[#ec1337]/20 text-[#ec1337] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#ec1337]/30 transition-colors">
                  <span className="truncate">Browse Movies</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

  )
}

export default MyBookings
