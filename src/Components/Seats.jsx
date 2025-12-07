import React, { useEffect, useState } from "react";

function Seats() {
  const seatRows = 10;
  const seatsPerRow = 12;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(
    localStorage.getItem("bookedSeats")
      ? JSON.parse(localStorage.getItem("bookedSeats"))
      : []
  );
  const [justBooked, setJustBooked] = useState([]);

  // Handle user clicking seat
  const getSeat = (seatValue) => {
    if (bookedSeats.includes(seatValue)) {
      alert(`Seat ${seatValue} is already booked.`);
      return;
    }

    if (selectedSeats.includes(seatValue)) {
      alert(`Seat ${seatValue} already selected.`);
      return;
    }

    if (selectedSeats.length === 5) {
      alert("Only 5 seats can be booked per user.");
      return;
    }

    setSelectedSeats([...selectedSeats, seatValue]);
  };

  // Book all seats
  const bookNow = () => {
    alert(`You booked: ${selectedSeats.join(", ")}`);

    const updated = [...bookedSeats, ...selectedSeats];

    localStorage.setItem("bookedSeats", JSON.stringify(updated));
    setBookedSeats(updated);
    setJustBooked(selectedSeats);

    setSelectedSeats([]); // reset
  };

  useEffect(() => {
    setBookedSeats(
      localStorage.getItem("bookedSeats")
        ? JSON.parse(localStorage.getItem("bookedSeats"))
        : []
    );
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Seat Booking App</h1>


      {justBooked.length > 0 && (
        <h2 className="text-green-500 text-xl">
          Successfully booked: {justBooked.join(", ")}
        </h2>
      )}

      {selectedSeats.length > 0 && (
        <button
          className="bg-yellow-300 p-2 mt-5 text-xl"
          onClick={bookNow}
        >
          Book Now
        </button>
      )}

      <div className="grid grid-cols-12 gap-4 p-10">
        {Array.from({ length: seatRows }).map((_, rowIndex) =>
          Array.from({ length: seatsPerRow }).map((_, seatIndex) => {
            const seatId =
              String.fromCharCode(65 + rowIndex) + (seatIndex + 1);
console.log(seatId);
            const isBooked = bookedSeats.includes(seatId);
            const isSelected = selectedSeats.includes(seatId);
            return (
              <button
                key={seatId}
                disabled={isBooked}
                onClick={() => getSeat(seatId)}
                className={`w-12 h-12 rounded text-sm font-bold
                ${
                  isBooked
                    ? "bg-red-500 cursor-not-allowed text-white"
                    : isSelected
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 hover:bg-blue-500"
                }`}
              >
                {seatId}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Seats;
