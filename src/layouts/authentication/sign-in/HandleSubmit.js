// https://contactmentor.com/login-form-react-js-code/

import axios from "axios";

function handleSubmit(event) {
  //Prevent page reload
  event.preventDefault();
  console.log(event)
  const data = JSON.stringify({ username: event.target[0].value , password: event.target[2].value });
  console.log(data);
  const config = {
    method: "post",
    url: "http://localhost:5000/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  axios(config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error); 
})
}

export default handleSubmit;
