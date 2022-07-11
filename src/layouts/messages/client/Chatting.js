import "./Chatting.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
// import "../server/server";

function Chatting() {
  const [message, setMessage] = useState("");

  const form = document.getElementById("form");
  const input = document.getElementById("input");

  // form.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   if (input.value) {
  //     socket.emit("chat-message", {
  //       fromId: userId,
  //       fromName: userName,
  //       roomId: roomId,
  //       roomName: roomName,
  //       message: input.value,
  //       status: 1,
  //     });
  //   }
  //   input.value = "";
  // });

  function addMessage(fromUser, msg) {
    const messages = document.getElementById("messages");
    const item = document.createElement("li");
    item.textContent = msg;
    if (!fromUser) {
      item.style.textAlign = "right";
    } else {
      item.style.textAlign = "left";
    }
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  }

  // useEffect(() => {
  //   socket.on("receive_message", (msg) => {
  //     console.log(msg, userId);
  //     if (msg && msg.fromId != userId) {
  //       addMessage(msg.fromId, msg.message);
  //     } else {
  //       addMessage(null, msg.message);
  //     }
  //   });
  // }, [socket]);

  return (
    <div>
      <div className="boardChat">
        <h3 className="title1">Room name</h3>
        <ul className="messages1"> </ul>
      </div>
      <form className="form1" action="">
        <input className="input1" autoComplete="off" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatting;
