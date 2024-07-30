import React, { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [submit, setSubmit] = useState('');
  const handleSubmit=(e) => {
    e.preventDefault();
    console.log('Clicked');
    setName(submit);
    setEmail(submit);
    setContact(submit);
  }

  return (
    <div style={{textAlign:'center'}}>
      
      <form onSubmit={handleSubmit}>
      <h1>Name</h1>
      <input
      type="text"
      placeholder="Your name"
      onChange={(e) => setSubmit(e.target.value)}
      />
      <h1>Email</h1>
      <input
      type="text"
      placeholder="Your email"
      onChange={(e) => setSubmit(e.target.value)}
      />
      <h1>Contact No</h1>
      <input
      type="text"
      placeholder="Your contact no"
      onChange={(e) => setSubmit(e.target.value)}
      />
      <br></br><br></br>
      <button type="submit">Submit</button>
      </form>
      <h2>Hello, {name} your email is {email}</h2>
    </div>
  );
}

export default App;
