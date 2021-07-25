import React, { useState } from 'react'
import { BsFillLockFill, BsFillEnvelopeOpenFill, } from "react-icons/bs";

const Login = () => {   

    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const loginsubmit =  (event) => {
        event.preventDefault()
    }

    return (
      <>
      <section className="section">
      <div className="loincolor">
      <from onclick={loginsubmit} >
          <h1>Login</h1>
          <hr></hr>
              <label htmlFor="email"><BsFillEnvelopeOpenFill /></label>
              <input 
              className="loginformate"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {setemail(e.target.value)}}
              /> 

            <label htmlFor="password"><BsFillLockFill /></label>
              <input 
              className="loginformate"
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {setpassword(e.target.value)}}
              /> 
              <button className="buttonlog"
              type="Submit">Login</button>
      </from>
      </div>
      </section>
      </>
    )
}

export default Login;