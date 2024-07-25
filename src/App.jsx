import React, { useEffect, useState } from 'react';
import './App.css'
const App = () => {

  const [form, setForm] = useState({
    name: '',
    adres: '',
    username: '',
    passwor: '',
    biography: ''
  });

  function validate() {
    let input = document.querySelectorAll('input');
    for (let i = 0; i < input.length; i++) {
      if (!input[i].value) {
        alert('Barcha maydonlarni toldiring');
        return false;
      }
    }
    return true;
  }

  function handname(e) {
    setForm({ ...form, name: e.target.value });
    console.log(e.target.value);
  }

  function handares(e) {
    setForm({ ...form, adres: e.target.value });
    console.log(e.target.value);
  }

  function handusername(e) {
    setForm({ ...form, username: e.target.value });
    console.log(e.target.value);
  }

  function handpassword(e) {
    setForm({ ...form, passwor: e.target.value });
    console.log(e.target.value);
  }

  function handbiography(e) {
    setForm({ ...form, biography: e.target.value });
    console.log(e.target.value);
  }
  useEffect(() =>{
    
  })
  function handsave(e) {
    e.preventDefault();
    let isvalid = validate();
    if (!isvalid) {
      return;
    }

    console.log(form);

    
    setForm({
      name: '',
      adres: '',
      username: '',
      passwor: '',
      biography: ''
    });
  }
  return (
    
      <div className="conta">
      <div className="blue">
        <div className="box">
          <div className="onebing">
            <h1>Create an account</h1>
            <form>
              <input onChange={handname} value={form.name} type="text" placeholder='Enter your full name' /> <br />
              <input onChange={handares} value={form.adres} type="email" placeholder='Enter your email address' /> <br />
              <input onChange={handusername} value={form.username} type="text" placeholder='Enter your username' /> <br />
              <input onChange={handpassword} value={form.passwor} type="password" placeholder='Enter your password' /> <br />
              <input onChange={handbiography} value={form.biography} type="text" placeholder='your biography' /> <br />
              <button onClick={handsave}>Create account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App