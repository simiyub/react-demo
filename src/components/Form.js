import React from 'react';

const Form =()=>{
return (

    <div className="App">
    <h4>Just demos</h4>
    <form>
      <input type="text" id="username" name="username" placeholder="username"></input>
      <br/>
      <br/>
      <input type="password" id="password" name="password" placeholder="password"></input>
      <br/>
      <br/>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  </div> 
)

}

export default Form;