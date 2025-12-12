import { useNavigate } from "react-router-dom";
import { Clapperboard } from "lucide-react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

export interface Movie {
  id: string;
  title: string;
  director?: string;
  poster?: string;
  genres?: string[];
  banner?: string;
}

export interface Ticket {
  id: string;
  movie: Movie;
  seats: string[];
  formattedDate: string;
  time: string;
  userId: string;
}

const MyBookings = () => {
  const navigate = useNavigate();
  const [ticketData, setTicketData] = useState<Ticket[]>([]);

  const fetchTickets = async () => {
    const user = auth.currentUser;
    if (!user) {
      setTicketData([]);
      return;
    }

    const q = query(collection(db, "Tickets"), where("userId", "==", user.uid));
    const snap = await getDocs(q);
    const data = snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Ticket[];

    setTicketData(data);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="dark:bg-[#121212]">
      <div className="relative max-w-6xl mx-auto flex min-h-screen w-full flex-col">
        <main className="flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <h1 className="text-white text-4xl font-black tracking-[-0.033em]">
              My Bookings
            </h1>
          </div>

          {/* TABS */}
          <div className="pb-3">
            <div className="flex border-b border-white/10 px-4 gap-8">
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#ec1337] text-white pb-[13px] pt-4">
                <p className="text-sm font-bold">Upcoming</p>
              </a>
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#b99da1] pb-[13px] pt-4 hover:text-white/90">
                <p className="text-sm font-bold">Past</p>
              </a>
            </div>
          </div>

          {/* BOOKINGS LIST */}
          <div className="flex flex-col gap-6 py-6">
            {ticketData.map((ticket, idx) => (
              <div key={idx} className="px-4">
                <div
                  className="relative flex flex-col sm:flex-row items-stretch gap-6 rounded-lg p-4 shadow-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${
                      ticket.movie.banner || "https://via.placeholder.com/600x300"
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Banner Overlay */}
                  <div className="absolute inset-0 bg-black/70"></div>

                  {/* Poster */}
                  <div
                    className="relative z-10 w-full sm:w-32 md:w-40 aspect-2/3 bg-cover rounded-lg"
                    style={{
                      backgroundImage: `url(${
                        ticket.movie.poster ||
                        "https://via.placeholder.com/300x450"
                      })`,
                    }}
                  />

                  {/* Text Content */}
                  <div className="relative z-10 flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-3">
                        <p className="text-white text-xl font-bold">
                          {ticket.movie.title}
                        </p>
                        <span className="text-xs font-bold text-green-300 bg-green-500/20 px-2.5 py-1 rounded-full">
                          Confirmed
                        </span>
                      </div>

                      <p className="text-[#b99da1] text-sm">
                        {ticket.formattedDate} @ {ticket.time}
                      </p>

                      <p className="text-white/90 text-sm">AMC Metreon 16, IMAX</p>

                      <p className="text-[#b99da1] text-sm">
                        Seats: {ticket.seats.join(", ")}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-auto">
                      <button className="h-10 px-5 rounded-lg bg-[#ec1337] text-white font-bold hover:bg-[#ec1337]/90">
                        View E-Ticket
                      </button>
                      <button className="h-10 px-5 rounded-lg border border-white/20 text-white/80 hover:bg-white/10">
                        Cancel Booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* EMPTY STATE */}
            {ticketData.length === 0 && (
              <div className="px-4 pt-10">
                <div className="flex flex-col items-center justify-center gap-6 rounded-lg border-2 border-dashed border-white/10 p-12 text-center">
                  <Clapperboard size={60} className="text-[#ec1337]" />
                  <div>
                    <p className="text-white text-lg font-bold">
                      No bookings yet
                    </p>
                    <p className="text-[#b99da1] text-sm">
                      Start your movie journey by booking your first ticket!
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("/")}
                    className="h-10 px-5 rounded-lg bg-[#ec1337]/20 text-[#ec1337] font-bold hover:bg-[#ec1337]/30"
                  >
                    Browse Movies
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyBookings;
