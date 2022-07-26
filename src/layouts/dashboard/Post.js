import "./Post.css"
import { useRef, useState } from "react";
import axios from "axios";
import MDBox from "components/MDBox";
import { TextField, Divider, InputLabel, SliderMarkLabel } from "@mui/material";
import MDButton from "components/MDButton";
import PhotoIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Cancel from '@mui/icons-material/Cancel';

function Post () {
    const [input, setInput] = useState('')
    const [file, setFile] = useState(null);
    const desc = useRef()

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = JSON.stringify({
          "code": "post",
          "params": {
            "content": "quandv post",
            "createdAt": 1653877440409,
            "createdBy": "quuandev",
            "age": 10,
            "status": 1
          }
        });
        
        const config = {
          method: 'post',
          url: 'http://localhost:5000/json-schema-dynamic/private/create',
          headers: { 
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjc0YWU0ZWVhYzA1MDI3YjRhNWY0ZmUiLCJpYXQiOjE2NTM4NzcxOTUsImV4cCI6MTY1Mzg3ODA5NX0.zIUEg6jtdiVcAEiJec5Uk7_sauyQvNrOsPSel8Gm9yM', 
            'Content-Type': 'application/json'
          },
          data,
        };
        
        axios(config)
            .then( (response) => {
                 console.log(JSON.stringify(response.data));
            })
            .catch( (error) => {
            console.log(error);
        });
    }
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
                                <MDButton 
                                color="info" 
                                >Post</MDButton>
                            ),
                        }}
                        />
                        {file && (
                                          <div className="shareImgContainer">
                                            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                                            <Cancel className="" onClick={() => setFile(null)} />
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


