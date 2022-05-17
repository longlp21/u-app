import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";
import SendIcon from "@mui/icons-material/Send";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
// import Icon from "@mui/material/Icon";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { TextField } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
// import MDTypography from "components/MDTypography";

function StatusCard() {
  return (
    <Card>
      <MDBox m={1}>
        <Grid>
          <MDBox>
            <TextField placeholder="What's new?" variant="outlined" fullWidth 
              InputProps={{
                  startAdornment: (
                    <IconButton>
                      <SendIcon />
                    </IconButton>
                  ),
                }}/>
            &nbsp;
            
          </MDBox>
        </Grid>
        <MDButton variant="contained" startIcon={<AddToPhotosIcon />} color="info">
          Photo/Video
        </MDButton>
        &nbsp;
        <MDButton variant="contained" startIcon={<SentimentSatisfiedAltIcon />} color="info" ml>
          Emotion
        </MDButton>
        &nbsp;
      </MDBox>
    </Card>
  );
}

export default StatusCard;
