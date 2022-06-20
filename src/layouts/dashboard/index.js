import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Form from "./Form";
import Post from "./Post";

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
                <Form />
              </Card>
            </MDBox>
            &nbsp;
            <Card>
              <MDBox m={1}>
                <Post />
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
