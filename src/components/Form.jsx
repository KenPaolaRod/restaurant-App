import { useState } from "react";
import Booking from "./Booking";
import {db} from "../components/firebase"
import { addDoc, collection } from "firebase/firestore";

function Form() {

  const [FullName, setFullName] = useState("");
  const [numberOfPeople, setnumberOfPeople] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const addBookings = async (bookings) => {
     await addDoc(collection(db, "Bookings"), bookings ) ;
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required value={FullName} onChange={(e) => setFullName(e.target.value)}/>
      <input type="Number" name="number" required value={numberOfPeople} onChange={(e) => setnumberOfPeople(e.target.value)}/>
      <input type="time" name="time" required value={time} onChange={(e) => setTime(e.target.value)} />
      <textarea name="message"  cols="30" rows="10" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button type="submit" onClick={() => addBookings({FullName, numberOfPeople, time, message})}>Submit</button>
    </form>

    <Booking />
    </>

  )
}

export default Form