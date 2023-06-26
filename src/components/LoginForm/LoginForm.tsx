import { Box, Typography, ThemeProvider, createTheme } from "@mui/material";
import styles from "./LoginForm.module.css";
import { FormEvent, useState } from "react";
import TextBox from "../TextBox";
import MainButton from "../MainButton";
import { Column, Row } from "../Layouts";
import Loader from "../Loader";

const LoginForm = () => {
  const test = true;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState({
    status: 404,
    imgURL: "",
  });
  const [error, setError] = useState(false);
  const [emailValid, setEmailValid] = useState({
    error: false,
    helperText: "",
  });
  const [passwordValid, setPasswordValid] = useState({
    error: false,
    helperText: "",
  });

  const handleSubmit = (event: FormEvent) => {
    let emailValid = false;
    let passValid = false;
    event.preventDefault();
    const userBase = [
      {
        email: "shaheer.ahmed12@gmail.com",
        password: "Shaheer123",
      },
      {
        email: "test1@test.com",
        password: "test1",
      },
      { email: "test2@test.com", password: "test2" },
    ];
    emailValid = validateEmail();
    passValid = validatePassword();
    if (emailValid && passValid) {
      const userIndex = userBase.findIndex(
        (loggingUser) => loggingUser.email === user.email
      );
      if (userIndex === -1) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const fetchRandomUnsplashImage = async () => {
    let cliendID = "2g17BB_SfWwrj7eH6iPzyZIKQZK9qCN4Np4RLUdIJ_c";
    let endpoint = `https://api.unsplash.com/photos/random/?client_id=${cliendID}`;
    await fetch(endpoint)
      .then(function (res) {
        if (res.status != 200) {
          setImg({
            ...img,
            status: res.status,
            imgURL: "src/assets/images/login_bg.jpg",
          });
          setLoading(false);
        } else {
          return res.json();
        }
      })
      .then(function (jsonData) {
        setImg({
          ...img,
          status: jsonData.status,
          imgURL: jsonData.urls.regular,
        });
        setLoading(false);
      });
  };

  const validatePassword = () => {
    if (user.password.length >= 8) {
      setPasswordValid({ ...passwordValid, error: false, helperText: "" });
      return true;
    }
    setPasswordValid({
      ...passwordValid,
      error: true,
      helperText: "Password must be at least 8 characters long",
    });
    return false;
  };

  const validateEmail = () => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        user.email.toLowerCase().trim()
      )
    ) {
      setEmailValid({ ...emailValid, error: false, helperText: "" });
      return true;
    }
    setEmailValid({
      ...emailValid,
      error: true,
      helperText: "Please enter a valid email address",
    });
    return false;
  };

  useState(() => {
    fetchRandomUnsplashImage();
  });

  const theme = createTheme();

  return test ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <Row justifyContent="space-between" alignItems="center">
        <div className={styles.login}>
          <form onSubmit={handleSubmit}>
            <Column justifyContent="start" alignItems="start">
              <Typography
                variant="h6"
                fontWeight={700}
                textAlign="left"
                marginBottom={3}
                color={"#97A1B1"}
              >
                WELCOME BACK
              </Typography>
              <Typography
                variant="h3"
                fontWeight={700}
                textAlign="left"
                marginBottom={5}
                color={"white"}
              >
                Login to your account
              </Typography>
              <Typography
                variant="body1"
                fontWeight={400}
                textAlign="left"
                marginBottom={3}
                color={"white"}
              >
                Don't have an account?{" "}
                <a className={styles.signupLink} href="signup">
                  Sign Up
                </a>
              </Typography>
              {error && (
                <div className={styles.error}>
                  <Typography
                    variant="body1"
                    textAlign="left"
                    paddingTop={1}
                    paddingBottom={1}
                    paddingLeft={2}
                  >
                    Invalid Credentials
                  </Typography>
                </div>
              )}
              <TextBox
                label="Email Address"
                required
                fullWidth
                name="email"
                autoFocus
                onChange={handleChange}
                autocomplete="email"
                error={emailValid.error}
                helperText={emailValid.helperText}
              ></TextBox>
              <TextBox
                label="Password"
                required
                fullWidth
                name="password"
                type="password"
                autoFocus
                onChange={handleChange}
                autocomplete="current-password"
                error={passwordValid.error}
                helperText={passwordValid.helperText}
              ></TextBox>
              <Box height={20} />
              <MainButton fullWidth type="submit">
                Sign In
              </MainButton>
            </Column>
          </form>
        </div>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img
            className={styles.loginImage}
            src={img.imgURL}
            alt="Login Background"
            height="100%"
          ></img>
        </Box>
        {/* </Box> */}
      </Row>
    </ThemeProvider>
  );
};

export default LoginForm;
