import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "../App.css";
import { BsFillLockFill, BsFillPersonFill, BsFillEnvelopeOpenFill, } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";


const Register = (props) => {
  const history = useHistory()
  const [records, setRecords] = useState([]);
  const [userRegistration, setuserRegistration] = useState({
    username:"",
    number:"",
    email:"",
    password:"",
    mail:"",
    femal:""
  });

  
    const handlerInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setuserRegistration({...userRegistration,  [name]: value })
    }

    const onChangeButton = async (event) => {
        event.preventDefault('');
        
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        console.log(records);
        setRecords([ ...records, newRecord]);
        console.log(records);

        setuserRegistration({username:"", email:"", phone:"", password:"", male:"", femal:""});
    }

    const PostData = async (e) => {
      e.preventDefault();

      const { username, email, phone, password, male, femal } = userRegistration;

       const res = await fetch("/register", {
         method:"POST",
         header: {
           "Content-Type" : "application/json"
         },
          body:JSON.stringify({
          username, email, phone, password, male, femal

         })
      });

      const data = await res.json();

      if(res.status === 422 || !data) {
        window.alert("INvalid Registration");
        console.log("INvalid Registration");
      } else {
        window.alert(" Registration Successfule");
        console.log("Successfule Registration");

        history.push("/login")
      }

    }

    return (
        <>
        <section className="section">
        <div className="fromcolor">
            <form onSubmit={onChangeButton} id="fromcolor" method="POST">
                <h1>Register</h1>
                <hr></hr>
              <label htmlFor="username"><BsFillPersonFill /></label>
              <input 
              className="divlebalcs" 
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              autoCapitalize="off"
              value={userRegistration.username}
              onChange= {handlerInput}
              />    

            <label htmlFor="number"><FiPhoneCall /></label>
              <input 
              className="divlebalcs" 
              type="text"
              name="number"
              id="number"
              placeholder="Number"
              autoCapitalize="off"
              value={userRegistration.number}
              onChange={handlerInput}
              /> 

            <label htmlFor="email"><BsFillEnvelopeOpenFill /></label>
              <input 
              className="divlebalcs" 
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              autoCapitalize="off"
              value={userRegistration.email}
              onChange={handlerInput}
              /> 

            <label htmlFor="password"><BsFillLockFill /></label>
              <input 
              className="divlebalcs" 
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoCapitalize="off"
              value={userRegistration.password}
              onChange={handlerInput}
              /> 

            <label htmlFor="mail">Male</label>
              <input 
              type="radio"
              name="status"
              id="male"
              placeholder="Mele"
              autoCapitalize="off"
              value={userRegistration.mail}
              onChange={handlerInput}
              /> 

              <label htmlFor="femal">Female</label>
              <input  
              type="radio"
              name="status"
              id="femal"
              placeholder="Femal"
              autoCapitalize="off"
              value={userRegistration.femal}
              onChange={handlerInput}
              /> 
    
            <button type="submit" className="buttonreg" onClick={PostData}>Register</button>
            </form>
          </div>
        </section>
        </>
    )
}

export default Register;