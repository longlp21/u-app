import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Post from "./Post";
import Feed from "./Feed";

function Dashboard() {
  const [posts, setPosts] = useState([]);  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={1.5}>
        <Grid>
          <Grid xs={9}>
            <MDBox>
              <Card>
                <Post />
              </Card>
            </MDBox>
            &nbsp;
            <Card>
              <MDBox m={1}>
                <Feed />
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
