import { useRef, useEffect, useState } from "react";
// react-router-dom components
import { Link, Navigate } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import axios from "axios";

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const data = JSON.stringify({
      username: event.target[0].value,
      password: event.target[2].value,
    });
    console.log(data);
    const config = {
      method: "post",
      url: "http://localhost:5000/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        console.log(user, password);
        setUser("");
        setPassword("");
        setSuccess(true);
      })
      .catch((error) => {
        // if (error) {
        //   setErrMsg('No Server Response');
        // }
        if (error.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (error.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
        errRef.current.focus();
        console.log(error);
      });
  };
  return (
    <div>
      {success ? (
        <Navigate to="/Dashboard" />
      ) : (
        <BasicLayout>
          <Card>
            <MDTypography variant="h4" fontWeight="medium" align="center" color="info" mt={3}>
              Sign in
            </MDTypography>
            <p
              color="error"
              align="center"
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <MDBox pt={4} pb={3} px={3}>
              <MDBox component="form" role="form" onSubmit={handleSubmit}>
                <MDBox mb={1}>
                  <MDInput
                    value={user}
                    autoFocus
                    id="username"
                    type="text"
                    ref={userRef}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Username"
                    fullWidth
                    required
                  />
                </MDBox>
                <MDBox mb={1}>
                  <MDInput
                    value={password}
                    id="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    fullWidth
                    required
                  />
                </MDBox>
                <MDBox mt={2} mb={1}>
                  <MDButton color="info" type="submit" fullWidth>
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
      )}
    </div>
  );
}

export default Login;
