import "./Post.css"
import { useRef, useState } from "react";
import axios from "axios";
import MDBox from "components/MDBox";
import { TextField, Divider, InputLabel, SliderMarkLabel } from "@mui/material";
import MDButton from "components/MDButton";
import PhotoIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Cancel from '@mui/icons-material/Cancel';

function Post () {
    const [input, setInput] = useState('');
    const [file, setFile] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const posts = { body };
        const data = JSON.stringify({
          "code": "person",
          "params": {
            "firstName": "long",
            "lastName": "lp",
            "age": 10
          }
        });

        fetch('http://localhost:5000/json-schema-dynamic/private/create', {
          method: 'post',
          headers: { 
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmZkOWU1ZDY3NzMyODJmZjQ5ZTJkYzgiLCJpYXQiOjE2NjMzMTExMzIsImV4cCI6MTY2MzMxMjAzMn0.RajXQOipMzSd68phpuVjn2pBeWBnOzojdKjAG7sYfcc', 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch( (error) => {
          console.log(error);
        });

    }          
    const desc = useRef()
    return (
        <MDBox mt={3} ml={3} mr={3} mb={1}>
                        <TextField
                        value = {input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Write something..."
                        variant="standard"
                        fullWidth
                        ref={desc}
                        outline="none"
                        InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                                <MDButton type="submit" onClick={handleSubmit}
                                >Post</MDButton>
                            ),
                        }}
                        />
                        {file && (
                                          <div className="shareImgContainer">
                                            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                                            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
                                          </div>
                                          )}
                        <Divider />
                        <label htmlFor="file">
                          <PhotoIcon className="shareIcon" />
                          <input 
                              style={{ display: "none" }}
                              type="file"
                              id="file"
                              onChange={(e) => setFile(e.target.files[0])} 
                            />
                        </label>
                        <MDBox />
                    </MDBox>
        )
    }

export default Post;


