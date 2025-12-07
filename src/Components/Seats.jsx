import React, { useState } from 'react'

function Seats() {
    const seatRows = 10;
    const seatsPerRow = 12;
    const Bookinseat = [];

    const [first, setfirst] = useState([])
    const [disabledSeats, setDisabledSeats] = useState([]);

    // console.log(typeof first,"type of the first")
    const getSeat = (SeatValue) => {
        // Bookinseat.push(SeatValue)
        // console.log(Bookinseat, "Bookinseat")
        if (first.includes(SeatValue)) {
            alert(`Seat ${SeatValue} is already selected.`);
            return;
        }
        setfirst([...first, SeatValue])
            if (first.length == 5) { alert('only 5 seats are ti book per user') }


    }

    const Book = () => {

        alert(`You have booked seats: ${first.join(", ")}`);
        setDisabledSeats(first)
    }
    // (5) ['A01', 'A11', 'A31', 'A21', 'A41']
    console.log(disabledSeats, 'disabledSeats')
    return (
        <>
            <div>
                <h1 className='text-3xl font-bold underline text-center mt-10'>Seat Booking Application</h1>
                <h1> Seats Booking :{first.join(",")}</h1>
                <h1> Total  Booking :{first.length}</h1>
                <h3>{first.length == 5 ? "Only 5 seats" : ''}</h3>
                {disabledSeats.length > 0 && <h2 className='text-green-500'>You have successfully booked seats: {disabledSeats.join(", ")}</h2>}
               {first.length>=1? <button className='bg-amber-200 text-black p-2 cursor-pointer text-2xl' onClick={Book}>Book</button>:""}
                <div className={`grid grid-rows-10 grid-cols-12 gap-4 p-10 justify-cente `}>
                    {Array.from({ length: seatRows }).map((_, rowIndex) => (
                        Array.from({ length: seatsPerRow }).map((_, seatIndex) => (
                            <button key={`${rowIndex}-${seatIndex}`}>
                                <button disabled={first.length == 5} onClick={() => getSeat(String.fromCharCode(65 + rowIndex) + seatIndex + 1)}
                                >{String.fromCharCode(65 + rowIndex)}{seatIndex + 1} </button>
                            </button>
                        ))
                    ))}
                </div>
            </div>

        </>
    )
}
// ${{String.fromCharCode(65 + rowIndex)}{seatIndex + 1}?true:false}

export default Seats