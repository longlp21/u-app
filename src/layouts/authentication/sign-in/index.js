// react-router-dom components
import { Link } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
// React Hooks
import { useState } from "react";
import handleSubmit from "./HandleSubmit";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <BasicLayout>
      <Card>
        <MDTypography variant="h4" fontWeight="medium" align="center" color="info" mt={3}>
          Sign in
        </MDTypography>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={1}>
              <MDInput
                autoFocus
                id="username"
                type="text"
                placeholder="Username"
                fullWidth
              />
            </MDBox>
            <MDBox mb={1}>
              <MDInput
                id="password"
                type="password"
                placeholder="Password"
                fullWidth
              />
            </MDBox>
            <MDBox mt={2} mb={1}>
              <MDButton
                color="info" type="submit" fullWidth>
                Sign in
              </MDButton>
            </MDBox>
            <MDBox mt={1} mb={-1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Login;
