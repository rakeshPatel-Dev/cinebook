"use client";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

type SeatType = "available" | "selected" | "occupied" | "vip";

interface SeatRow {
  label: string;
  seats: SeatType[];
}

const seatRows: SeatRow[] = [
  { label: "A", seats: ["available","available","occupied","available","available","available","available","available","available","occupied","available","available"] },
  { label: "B", seats: ["available","occupied","occupied","available","available","available","available","available","occupied","occupied","available","available"] },
  { label: "C", seats: Array(12).fill("available") },
  { label: "D", seats: Array(12).fill("available") },
  { label: "E", seats: Array(12).fill("vip") },
];

const seatPrices: Record<SeatType, number> = {
  available: 300,
  selected: 300,
  occupied: 0,
  vip: 500,
};

const seatClasses: Record<SeatType, string> = {
  available: "bg-[#4A5568] hover:bg-[#ec1337]/80 cursor-pointer transition-all",
  selected: "bg-[#ec1337] transition-all",
  occupied: "bg-[#2D3748] cursor-not-allowed",
  vip: "bg-[#FFD700]/30 border-2 border-dashed border-[#FFD700] cursor-pointer hover:bg-[#FFD700]/50 transition-all",
};

interface SeatProps {
  type: SeatType;
  onClick: () => void;
  price: number;
}

const Seat: React.FC<SeatProps> = ({ type, onClick, price }) => (
  <div
    className={`aspect-square rounded ${seatClasses[type]}`}
    onClick={type !== "occupied" ? onClick : undefined}
    title={`Price: Rs. ${price}`}
  />
);

const Booking: React.FC = () => {
  const { state } = useLocation();
  const movie = state?.movie;

  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  if (!movie) {
    return (
      <div className="text-center text-white pt-40 text-3xl">
        Movie Not Found 😢
      </div>
    );
  }

  const toggleSeat = (rowLabel: string, index: number, type: SeatType) => {
    if (type === "occupied") return;

    const seatId = `${rowLabel}${index + 1}`;

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const getSeatType = (row: SeatRow, idx: number): SeatType => {
    const seatId = `${row.label}${idx + 1}`;
    return selectedSeats.includes(seatId) ? "selected" : row.seats[idx];
  };

  const totalPrice = selectedSeats.reduce((sum, seatId) => {
    const rowLabel = seatId.charAt(0);
    const seatIndex = parseInt(seatId.slice(1)) - 1;
    const row = seatRows.find((r) => r.label === rowLabel)!;
    const originalType = row.seats[seatIndex];
    return sum + seatPrices[originalType];
  }, 0);

  const handleConfirm = () => {
    if (selectedSeats.length === 0) {
      toast.error("Please select at least one seat!",{
        closeOnClick:true,
      });
      return;
    }

    navigate("/confirm-booking", {
      state: {
        movie,
        seats: selectedSeats,
        price: totalPrice,
      },
    });
  };

  return (
    <div className="dark:bg-[#121212] min-h-screen w-full flex flex-col">
      <ToastContainer/>
      <div className="layout-container flex h-full flex-col">
        <main className="flex flex-col lg:flex-row flex-1 px-4 sm:px-10 lg:px-20 py-10 gap-8">
          
          {/* SEAT LAYOUT */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-4xl">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex flex-col gap-3 min-w-72">
                  <p className="text-white text-4xl font-black">
                    Select Your Seats
                  </p>
                  <p className="text-[#b99da1] text-base">
                    Choose your preferred seats from the layout below.
                  </p>
                </div>
              </div>

              {/* SCREEN */}
              <div className="flex flex-col items-center justify-center w-full px-4 pt-8 pb-4">
                <div
                  className="w-full h-2 bg-gradient-to-t from-gray-700 to-gray-400 rounded-full"
                  style={{ filter: "blur(2px)", boxShadow: "0 0 20px 5px rgba(255,255,255,0.2)" }}
                />
                <h3 className="text-white/80 tracking-widest text-lg font-bold pt-3">
                  SCREEN
                </h3>
              </div>

              {/* SEAT MAP */}
              <div className="p-4 flex flex-col items-center gap-3">
                {seatRows.map((row) => (
                  <div key={row.label} className="flex items-center w-full justify-center gap-2">
                    <span className="w-6 text-sm text-gray-400 text-center">
                      {row.label}
                    </span>

                    <div className="flex-1 grid grid-cols-12 gap-2">
                      {row.seats.map((seatType, i) => (
                        <Seat
                          key={i}
                          type={getSeatType(row, i)}
                          onClick={() => toggleSeat(row.label, i, seatType)}
                          price={seatPrices[seatType]}
                        />
                      ))}
                    </div>

                    <span className="w-6 text-sm text-gray-400 text-center">
                      {row.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* LEGEND */}
              <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {Object.keys(seatClasses).map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <div className={`size-5 rounded ${seatClasses[type as SeatType]}`} />
                    <p className="text-[#b99da1] text-sm">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <aside className="w-full lg:w-80 xl:w-96 shrink-0">
            <div className="sticky top-10 bg-[#221013] p-6 rounded-xl border border-white/10">
              <h3 className="text-2xl text-white font-bold mb-4">Booking Summary</h3>

              <div className="space-y-3 mb-6 border-b border-white/10 pb-6">
                <div className="flex justify-between">
                  <p className="text-[#b99da1]">Selected Seats</p>
                  <p className="text-white font-bold">{selectedSeats.join(", ") || "-"}</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-[#b99da1]">Tickets</p>
                  <p className="text-white font-bold">{selectedSeats.length}</p>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <p className="text-white text-xl font-bold">Total Price</p>
                <p className="text-[#ec1337] text-3xl font-black">Rs. {totalPrice}.00</p>
              </div>

              <button
                onClick={handleConfirm}
                className="w-full h-12 bg-[#ec1337] text-white font-bold text-lg rounded-lg hover:bg-[#ec1337]/90"
              >
                Proceed to Payment
              </button>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Booking;
