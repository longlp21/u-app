import React from "react";
import "./Chatting.css";

function Chatting() {
  return (
    <div>
      {/* <ul className="messages1"></ul> */}
      <form className="form1" onSubmit={()=>{}} action="">
        <input className="input1" autoComplete="off" />
        <button type="button">Send</button>
      </form>
    </div>
  );
}

export default Chatting;
