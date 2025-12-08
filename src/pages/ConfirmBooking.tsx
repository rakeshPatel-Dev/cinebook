import { AlarmClock, Armchair, BadgeIndianRupee, Calendar, CalendarClock, CreditCard } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface LocationState {
  movie: {
    id: string;
    title: string;
    director: string;
    poster: string;
    genres: string[];
  };
  seats: string[];
  price: number;
}


const ConfirmBooking = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const booking = state as LocationState;
  
  const handleSubmit = (e) => {
      // navigate("/payment/success")

       navigate("/payment/success", {
      state: {
        movie,
        seats,
        formattedDate, 
        time,
      },
    });
  }

  // 10 minutes -> 600 seconds
  const [timeLeft, setTimeLeft] = useState(600);
  const [showModal, setShowModal] = useState(false);

  // ⏳ TIMER EFFECT
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowModal(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format timer → MM:SS
  // const formatted = `${}:${}`;

  const leftMinute = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const leftSecond = String(timeLeft % 60).padStart(2, "0")

  if (!booking) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-white">
        <p>No booking found.</p>
      </div>
    );
  }

  const { movie, seats, price } = booking;

  const entertainmentPrice = Math.floor(price * 0.03);
  const amountBeforeVat = price + entertainmentPrice;
  const vatAmount = Math.floor(amountBeforeVat * 0.13);
  const actualPrice = price + vatAmount;



  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedDate = formatter.format(new Date());

  const time = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });



  return (
    <main className="dark:bg-[#121212] flex w-full flex-1 justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-black text-gray-900 dark:text-white md:text-4xl">
              Confirm Your Booking
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400">
              Review your details before payment.
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="h-10 px-4 rounded-lg bg-gray-200/80 dark:bg-white/10 text-sm font-bold dark:text-white hover:bg-gray-300/80"
          >
            Go Back
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          {/* LEFT */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Movie Card */}
            <div className="rounded-xl border border-gray-200/50 dark:border-white/10 bg-white dark:bg-[#121212]/50 p-6">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-full sm:w-1/3">
                  <div
                    className="aspect-[2/3] w-full rounded-lg bg-cover bg-center"
                    style={{
                      backgroundImage: `url("${movie.poster}")`,
                    }}
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4">
                  <div className="flex gap-2 flex-col">
                    <h1 className="text-white/50"> The {movie.director}</h1>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {movie.title}
                    </p>
                  </div>

                  {/* Genres */}
                  <div className="flex flex-wrap gap-2">
                    {movie.genres.map((g) => (
                      <span
                        key={g}
                        className="px-3 py-1 rounded-full bg-gray-200/80 dark:bg-white/10 text-sm text-gray-700 dark:text-gray-300"
                      >
                        {g}
                      </span>
                    ))}
                  </div>

                  <div className="h-px bg-gray-300/30 dark:bg-white/10" />

                  <div className="flex flex-col gap-3">
                    <p className="flex items-center text-sm text-gray-700 dark:text-gray-300 gap-2">
                      <Calendar />
                      {formattedDate}
                    </p>
                    <p className="flex items-center text-sm text-gray-700 dark:text-gray-300 gap-2">
                      <CalendarClock />
                      {time}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Armchair />
                      Seats: {seats.join(", ")}
                    </p>

                    <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <BadgeIndianRupee />
                      Total Price: Rs. {price}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timer */}
            <div className="flex flex-col items-center gap-4 rounded-xl border border-[#ec1337]/20 bg-[#ec1337]/10 dark:bg-[#ec1337]/5 p-6">
              <p className="text-base font-bold text-[#ec1337] dark:text-[#ec1337]/90">
                Your seats are held for
              </p>
              <div className="flex w-full max-w-sm gap-4">
                <div className="flex grow basis-0 flex-col items-stretch gap-2">
                  <div className="flex h-16 grow items-center justify-center rounded-lg bg-white dark:bg-[#121212]/60 px-3">
                    <p className="text-3xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">
                      00
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">
                      Hours
                    </p>
                  </div>
                </div>
                <div className="flex grow basis-0 flex-col items-stretch gap-2">
                  <div className="flex h-16 grow items-center justify-center rounded-lg bg-white dark:bg-[#121212]/60 px-3">
                    <p className="text-3xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">
                      {leftMinute}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">
                      Minutes
                    </p>
                  </div>
                </div>
                <div className="flex grow basis-0 flex-col items-stretch gap-2">
                  <div className="flex h-16 grow items-center justify-center rounded-lg bg-white dark:bg-[#121212]/60 px-3">
                    <p className="text-3xl font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">
                      {leftSecond}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">
                      Seconds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MODAL WHEN TIME IS UP */}
          {showModal && (
            <div className="fixed inset-0 backdrop-blur-md bg-black/70 flex items-center justify-center z-50">
              <div className="bg-[#1b1b1b] p-6 rounded-lg w-80 border border-white/10 flex flex-col items-center">
                <span className="text-white"><AlarmClock size={40} /></span>
                <h2 className="text-xl font-bold text-white">Your time is up</h2>
                <p className="text-gray-300 mt-2">
                  Your seat reservation expired.
                </p>

                <button
                  onClick={() => navigate("/")}
                  className="mt-6 w-full bg-[#ec1337] text-white font-semibold py-2 rounded-lg hover:bg-[#ec1337]/90"
                >
                  OK
                </button>
              </div>
            </div>
          )}

          {/* RIGHT */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Order Summary */}
            <div className="rounded-xl border border-gray-200/50 dark:border-white/10 bg-white dark:bg-[#121212]/50 p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                Order Summary
              </h3>

              <div className="space-y-3 border-b border-gray-200/50 dark:border-white/10 pb-4">
                <div className="flex justify-between text-sm">
                  <p className="text-gray-600 dark:text-gray-400">
                    Seats ({seats.length})
                  </p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Rs {price}
                  </p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-gray-600 dark:text-gray-400">
                    Entertainment Tax (3%)
                  </p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Rs {entertainmentPrice}
                  </p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-gray-600 dark:text-gray-400">
                    Value Added Tax (13%)
                  </p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Rs {vatAmount}
                  </p>
                </div>
              </div>

              <div className="flex justify-between text-lg font-bold mt-4">
                <p className="text-gray-900 dark:text-white">Total</p>
                <p className="text-gray-900 dark:text-white">Rs {actualPrice}</p>
              </div>

              {/* <button className="mt-6 w-full h-12 bg-[#ec1337] hover:bg-[#d80f30] text-white rounded-lg font-bold">
                Proceed to Payment
              </button> */}
            </div>
            {/* Payment Information */}
            <div className="rounded-xl border border-gray-200/50 dark:border-white/10 bg-white dark:bg-[#121212]/50 p-6">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                Payment Information
              </h3>
              <div 
              className="space-y-4">
                <div className="relative">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    htmlFor="card-number"
                  >
                    Card Number
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/10 p-3 text-sm focus:border-[#ec1337] focus:ring-[#ec1337]"
                    id="card-number"
                    placeholder="•••• •••• •••• ••••"
                    type="text"
                  />
                  <CreditCard className=" absolute right-3 top-9 text-gray-400" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      htmlFor="expiry-date"
                    >
                      Expiry Date
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/10 p-3 text-sm focus:border-[#ec1337] focus:ring-[#ec1337]"
                      id="expiry-date"
                      placeholder="MM / YY"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      htmlFor="cvv"
                    >
                      CVV
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/10 p-3 text-sm focus:border-[#ec1337] focus:ring-[#ec1337]"
                      id="cvv"
                      placeholder="•••"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="h-4 w-4 rounded border-gray-300 text-[#ec1337] focus:ring-[#ec1337] dark:bg-white/10 dark:border-white/20"
                    id="save-card"
                    type="checkbox"
                  />
                  <label
                    className="text-sm text-gray-600 dark:text-gray-400"
                    htmlFor="save-card"
                  >
                    Save card for future use
                  </label>
                </div>
                <button
                              
              onClick={(e) => {
                handleSubmit(e)
                // navigate("/payment/success");
              }} 
                  className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#ec1337] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#ec1337]/90"
                >
                  <span className="truncate">Confirm &amp; Pay $34.25</span>
                </button>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                  Secure payment powered by Stripe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConfirmBooking;
