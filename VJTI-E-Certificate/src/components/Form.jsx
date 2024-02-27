import React from 'react'
import '../css/Form.css'
function Form() {
  return (
    
    <form className="form">
      <div className="title-2"><span>Technovanza</span></div>
       <div className="form-title"><span>Enter your details</span></div>
      <div className="input-container">
        <input className="input-mail" type="email" placeholder="Registration ID" />
        <span> </span>
      </div>

      <section className="bg-stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </section>

      <div className="input-container">
        <input className="input-pwd" type="password" placeholder="Enter Year" />
      </div>
      <section className="bg-stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </section>
      <div className="input-container">
        <input className="input-mail" type="email" placeholder="Enter Name" />
        <span> </span>
      </div>
      <button type="submit" className="submit">
        <span className="sign-text">Get your Certificate </span>
      </button>

      {/* <p className="signup-link">
        No account?
        <a href="" className="up">Sign up!</a>
      </p> */}
       
   </form>

  )
}

export default Form
