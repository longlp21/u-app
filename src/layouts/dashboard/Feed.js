import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import axios from 'axios';
import "./Feed.css"

function Feed () {
    const handleSubmit = () => {
        const data = JSON.stringify({
            "code": "post",
            "query": {
                "createdBy": "quuandev"
        },
            "projection": {
                "content": 1,
                "createdAt": 1
        },
            "sort": {
            "createdAt": 1
        },
            "skip": 0,
            "limit": 2
        });

        const config = {
            method: 'post',
            url: 'http://localhost:5000/json-schema-dynamic/private/search',
            headers: { 
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjc0YWU0ZWVhYzA1MDI3YjRhNWY0ZmUiLCJpYXQiOjE2NTM4NzcxOTUsImV4cCI6MTY1Mzg3ODA5NX0.zIUEg6jtdiVcAEiJec5Uk7_sauyQvNrOsPSel8Gm9yM', 
                'Content-Type': 'application/json'
            },
            data,
            };

        axios(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

            }

    return (
        <div className="post">
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    );
};
export default Feed;