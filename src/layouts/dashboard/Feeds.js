import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import MDButton from "components/MDButton";
import axios from "axios";
import axiosClient from "./axiosClient";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPost = () => {
    const data = JSON.stringify({
      "code": "person",
      "query": {
        "firstName": "longdev10"
      },
      "projection": {
        "firstName": 1,
        "lastName": 1
      },
      "sort": {
        "age": 1
      },
      "skip": 0,
      "limit": 2
    });

    axios.post('http://localhost:5000/json-schema-dynamic/private/search', {
      header: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmZkOWU1ZDY3NzMyODJmZjQ5ZTJkYzgiLCJpYXQiOjE2NjM1OTQwNjMsImV4cCI6MTY2MzU5NDk2M30.h6XxvwnEL3-gKF1hIhf3EyE_T3JVAWTBiHusBlF0irk', 
        'Content-Type': 'application/json'
      },
      data
    }).then((data) => {
      console.log(JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const testPost=async () => {
    const url = `json-schema-dynamic/private/search`;
  
    await axiosClient.post(url,{
        code: "person",
        query: {
          firstName: "longdev10"
        },
        projection: {
          firstName: 1,
          lastName: 1
        },
        sort: {
          age: 1
        },
        skip: 0,
        limit: 2
      
    }).then((data) => {
      console.log(data.data)
    });
  }
  const postNew=async () => {
    const url = `json-schema-dynamic/private/create`;
  
    await axiosClient.post(url,{
      "code": "person",
      "params": {
          "firstName": "long",
          "lastName": "dev23",
          "age": 10
      }
  }).then((data) => {
      console.log(data.data)
    });
  }

  useEffect(() => {
    // fetchPost();
    testPost();
    postNew()
  }, []);

  return (
    <div>
            {posts.map((post) => (
                <Card>
                    <p key={post.id}>{post.id}</p>
                </Card>
        ))}
    </div>
  );
}


export default App;