import { useState, useEffect } from 'react'
import {db} from "../components/firebase"
import { collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";

function Booking() {

  const [bookings, setBookings] = useState([]);


  const getData = () => {
    onSnapshot(collection(db, "Bookings"), (booking) => {
      setBookings(booking.docs.map(docs => docs.data()));
    })
  }

  useEffect(() => {
    getData();
  },[]);

  // getData()

  return (
    <div>
      <h2>Bookings</h2>
      { bookings && bookings.map((e, id) => {
        return (
          
          <div className='booking-box' key={id}>
            <p>Name: {e.FullName}</p>
            <p>Number Of People: {e.numberOfPeople}</p>
            <p>Time:{e.time}</p>
            <p>Date: {e.date}</p>
            <p>Message: {e.message}</p>
            <button>Delete</button>
          </div>
          
        )
      })}
    </div>
  )
}

export default Booking