import "./room-config";
/*Init socket*/
const socket = io("http://localhost:5000", {
  reconnectionDelay: 1000,
  reconnection: true,
  reconnectionAttempts: 10,
  transports: ["websocket"],
  agent: false, // [2] Please don't set this to true
  upgrade: false,
  rejectUnauthorized: false,
});

const userName = "user1";
const userId = 1;

socket.on("connect", () => {
  console.log(socket.id, socket.connected);
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

socket.on("reconnect_error", (err) => {
  console.log(`reconnect_error due to ${err.message}`);
});

/*
Listing join room
*/
socket.on("join-room", function (room) {
  console.log(room);
});

/*
Receive message from server
*/
socket.on("chat-message", function (msg) {
  /* {
  "_id": "629eaaa8feb02737cc58ca90",
  "fromId": "1",
  "fromName": "user1",
  "createdAt": "1654565544906",
  "roomId": "1-2",
  "roomName": "user1-user2",
  "message": "fdsafs",
  "status": true,
  "__v": 0
}*/
  console.log(msg, userId);
  if (msg && msg.fromId != userId) {
    addMessage(msg.fromId, msg.message);
  } else {
    addMessage(null, msg.message);
  }
});

$(document).ready(function () {
  // Join room
  socket.emit("join-room", { userId: userId, username: userName, roomId: roomId });

  var form = document.getElementById("form");
  var input = document.getElementById("input");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value) {
      socket.emit("chat-message", {
        fromId: userId,
        fromName: userName,
        roomId: roomId,
        roomName: roomName,
        message: input.value,
        status: 1,
      });
    }
    input.value = "";
  });
});

import { io } from "./socket.io.esm.min.js"; //  "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
function addMessage(fromUser, msg) {
  var messages = document.getElementById("messages");
  var item = document.createElement("li");
  item.textContent = msg;
  if (!fromUser) {
    item.style.textAlign = "right";
  } else {
    item.style.textAlign = "left";
  }
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
}
