import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Post from "./Post";
import Feeds from "./Feeds";


function Dashboard() {

  
  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <MDBox py={1.5}>
        <Grid>
          <Grid item xs={9}>
            <MDBox>
              <Card>
                <Post />
              </Card>
            </MDBox>
            &nbsp;
              <MDBox m={1}><Feeds /></MDBox>
            &nbsp;
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
