import { useState } from "react";

function Form() {

  const [fullName, setFullName] = useState("")
  const [numberOfPeople, setnumberOfPeople] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormValues(input.value)
    console.log(fullName);

  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
      <input type="Number" name="number" value={numberOfPeople} onChange={(e) => setnumberOfPeople(e.target.value)}/>
      <input type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <textarea name="message"  cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button type="submit">Submit</button>
    </form>
    </>

  )
}

export default Form