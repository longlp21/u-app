import axios from "axios";

function HandleSubmit(username, password) {
  const data = JSON.stringify({ username, password });

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
    });
}

export default HandleSubmit;
