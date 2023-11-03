import { useState, useEffect } from 'react'
import {db} from "./firebase"
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { FaTimes } from 'react-icons/fa';


function BookingView() {

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
    if (confirm("Are you sure you want to cancel this reservation?")) {
      await deleteDoc(doc(db, 'Bookings', id))
    }
  }

  
  return (
    <div className='booking-view'>
      {bookings.length > 0 && <h3>Bookings</h3>}

      { bookings && bookings.map((e, index) => {
        return (
          <article className='booking-box' key={index}>
            <div>
              <p> <span>Name:</span> {e.data().FullName}</p>
              <p> <span>Number Of People:</span> {e.data().numberOfPeople}</p>
              <p> <span>Time:</span> {e.data().time}</p>
              <p><span>Date</span> {e.data().date}</p>
              <p> <span>Message:</span> {e.data().message}</p>
            </div>
            <button onClick={() => cancelBooking(e.id)}> <FaTimes /> </button>
          </article>
        )
      })}
    </div>
  )
}

export default BookingView