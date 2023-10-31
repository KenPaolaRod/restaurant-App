import { useState, useEffect } from 'react'
import {db} from "../components/firebase"
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

function Booking() {

  const [bookings, setBookings] = useState([]);

  const getData = () => {
    onSnapshot(collection(db, "Bookings"), (booking) => {
      setBookings(booking.docs.map(docs => docs));
    })
  };

  useEffect(() => {
    getData();
  },[]);

  const cancelBooking = async (id) => {
    await deleteDoc(doc(db, 'Bookings', id))
  }
  
  return (
    <div>
      <h2>Bookings</h2>
      { bookings && bookings.map((e, index) => {
        return (
          <div className='booking-box' key={index}>
            <p>Name: {e.data().FullName}</p>
            <p>Number Of People: {e.data().numberOfPeople}</p>
            <p>Time:{e.data().time}</p>
            <p>Date: {e.data().date}</p>
            <p>Message: {e.data().message}</p>
            <button onClick={() => cancelBooking(e.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Booking