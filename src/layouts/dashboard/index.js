/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import MDTypography from "components/MDTypography";

// import Item from "@mui/material/ListItem";
import SendIcon from "@mui/icons-material/Send";
// import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
// import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import { TextField, IconButton } from "@mui/material";
import MDAvatar from "components/MDAvatar";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={2}>
        <Grid>
          <Grid xs={8}>
            <MDBox>
              <Card>
                <MDBox m={1}>
                  <MDBox>
                    <TextField
                      placeholder="What's new?"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <IconButton>
                            <SendIcon />
                          </IconButton>
                        ),
                      }}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>
            &nbsp;
            <Card>
              <MDBox m={1}>
                <MDAvatar src="https://bit.ly/34BY10g" alt="Avatar" size="sm" />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
