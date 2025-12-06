import React, { useState } from 'react'

function Seats() {
    const seatRows = 10;
    const seatsPerRow = 12;
    const Bookinseat = [];

    const [first, setfirst] = useState([])

    // console.log(typeof first,"type of the first")
    const getSeat = (SeatValue) => {
        // Bookinseat.push(SeatValue)
        // console.log(Bookinseat, "Bookinseat")

        setfirst([...first, SeatValue])


    }
    if(first.length==5){ alert('only 5 seats are ti book per user')}

    // trm task
    // ---> if a01 appear 2 times alert msg
    // -->button Book selected Booked Slots Tell them user is booked or Color to red
    // 
    // 
    return (
        <>

            <div>
                <h1 className='text-3xl font-bold underline text-center mt-10'>Seat Booking Application</h1>
                <h1> Seats Booking :{first.join(",")}</h1>
                <h3>{first.length == 5 ? "Only 5 seats" : ''}</h3>
                <div className='grid grid-rows-10 grid-cols-12 gap-4 p-10 justify-center'>

                    {Array.from({ length: seatRows }).map((_, rowIndex) => (
                        Array.from({ length: seatsPerRow }).map((_, seatIndex) => (
                            <button key={`${rowIndex}-${seatIndex}`} className="w-12 h-12 bg-blue-500 hover:bg-red-700 text-white flex items-center justify-center rounded cursor-pointer"  >
                                <button  disabled={first.length==5} onClick={() => getSeat(String.fromCharCode(65 + rowIndex) + seatIndex + 1)} > {String.fromCharCode(65 + rowIndex)}{seatIndex + 1}</button>
                            </button>
                        ))
                    ))}
                </div>
            </div>

        </>
    )
}


export default Seats