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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

function Cover() {
  return (
    <BasicLayout>
      <Card>
        <MDTypography variant="h4" fontWeight="medium" align="center" color="info" mt={3}>
          Create an account
        </MDTypography>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={1}>
              <MDInput autoFocus type="text" placeholder="Full name" fullWidth />
            </MDBox>
            <MDBox mb={1}>
              <MDInput autoFocus type="text" placeholder="Username" fullWidth />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="email" placeholder="Email" fullWidth />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="password" placeholder="Password" fullWidth />
            </MDBox>
            <MDBox mt={1} mb={1}>
              <Link to="/authentication/sign-in">
                <MDButton color="info" fullWidth>
                  sign up
                </MDButton>
              </Link>
            </MDBox>
            <MDBox mt={1} mb={-1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                >
                  Sign in
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Cover;
