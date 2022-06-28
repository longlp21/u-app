import { useState } from "react";
import axios from "axios";
import MDBox from "components/MDBox";
import { TextField, Divider } from "@mui/material";
import MDButton from "components/MDButton";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

function Post () {
    const [input, setInput] = useState('')

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
                        outline="none"
                        InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                                <MDButton 
                                color="info" onClick={handleSubmit}
                                >Post</MDButton>
                            ),
                        }}
                        />
                        <Divider />
                        <MDBox>
                        <MDButton startIcon={<InsertPhotoIcon />} >Photos/ Videos</MDButton>
                        <MDButton startIcon={<EmojiEmotionsIcon />} >Emotions</MDButton>
                        </MDBox>
                    </MDBox>
        )
    }

export default Post;


