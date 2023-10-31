import { useState } from "react";
import Booking from "./Booking";
import {db} from "../components/firebase"
import { addDoc, collection } from "firebase/firestore";

function Form() {

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
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required placeholder="Full Name" value={FullName} onChange={(e) => setFullName(e.target.value)}/>
      <input type="Number" name="number" required placeholder="How Many People" value={numberOfPeople} onChange={(e) => setnumberOfPeople(e.target.value)}/>
      <input type="time" name="time" required placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
      <input type="date" name="date" id="date" required placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
      <textarea name="message"  cols="30" rows="10" required placeholder="How can we make your experience better?" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button type="submit" onClick={() => addBookings({FullName, numberOfPeople, time, date, message})}>Submit</button>
    </form>
    <Booking />
    </>
  )
}

export default Form