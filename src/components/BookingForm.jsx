import { useState } from "react";
import {db} from "./firebase"
import { addDoc, collection } from "firebase/firestore";

function BookingForm() {

  const [FullName, setFullName] = useState("");
  const [numberOfPeople, setnumberOfPeople] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("");
  const [bookings, setBookings] = useState([]);

  const clearInputs = () => {
    setFullName("");
    setnumberOfPeople("");
    setTime("");
    setMessage("")
    setDate("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const addBookings = async (bookings) => {
    FullName && numberOfPeople && time && date && message ? await addDoc(collection(db, "Bookings"), bookings ) : alert("Must Fill Everything")
     clearInputs()
  }

  return (
    <div className="form-box">
      <article className="contact-us">
        <h1>Contact Us</h1>
        <p>Get ready to taste our  take  on modern Colombian Menu. Indulge  your tastebud with the burst of flavour </p>
        <a href="mailto:hola@gmail.com">hola@gmail.com</a>
        <a href="tel:+1 1234-567">+1 1234-567</a>
      </article>
      <article className="book-now">
        <h2>Book Now</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" required placeholder="Full Name" value={FullName} onChange={(e) => setFullName(e.target.value)}/>
          <input type="Number" name="number" required placeholder="How Many People" value={numberOfPeople} onChange={(e) => setnumberOfPeople(e.target.value)}/>
          <input type="time" name="time" required placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
          <input type="date" name="date" id="date" required placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
          <textarea name="message"  cols="30" rows="10" required placeholder="How can we make your experience better?" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button className="btn btn-light" type="submit" onClick={() => addBookings({FullName, numberOfPeople, time, date, message})}>Submit</button>
        </form>
      </article>
    </div>
    
  )
}

export default BookingForm