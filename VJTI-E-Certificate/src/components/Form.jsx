import React from 'react'
import '../css/Register.css'
function Form() {
  return (
   
  <div id="form-ui">
  <form action="" method="post" id="form">
    <div id="form-body">
      <div id="welcome-lines">
        <div id="welcome-line-1"><b>Rangwardhan</b></div>
      </div>
      <div id="input-area">
        <div class="form-inp">
          <input placeholder="Name" type="text"/>
        </div>
        <div class="form-inp">
          <input placeholder="Registration ID" type="text"/>
        </div>
        <div class="form-inp">
          <input placeholder="Year" type="text"/>
        </div>
      </div>
      <div id="submit-button-cvr">
        <button id="submit-button" type="submit">Get Certificate</button>
      </div>
      
      <div id="bar"></div>
    </div>
  </form>
  </div>

  )
}

export default Form
