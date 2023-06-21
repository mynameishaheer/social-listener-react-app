import { Box, Typography } from "@mui/material";
import styles from "./LoginForm.module.css";
import { FormEvent, useState } from "react";
import TextBox from "../TextBox";
import MainButton from "../MainButton";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState({
    status: 404,
    imgURL: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(user);
  };

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const fetchRandomUnsplashImage = async () => {
    let cliendID = "vJ6nJJPMKaxLm3fhEFSdLTqvB87NmSYpV26lrsKvHxw";
    let endpoint = `https://api.unsplash.com/photos/random/?client_id=${cliendID}`;
    await fetch(endpoint)
      .then(function (res) {
        console.log(res.status);
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
        // console.log(jsonData);
        // console.log(jsonData.urls.regular);
        // console.log(img);
        setLoading(false);
      });
  };

  useState(() => {
    fetchRandomUnsplashImage();
  });

  return loading ? (
    <p>Loading</p>
  ) : (
    <Box className={styles.loginPage}>
      <Box className={styles.loginContainer}>
        <Box className={styles.loginComponents}>
          <Typography
            variant="h6"
            fontWeight={700}
            textAlign="left"
            marginBottom={4}
            color={"#97A1B1"}
          >
            WELCOME BACK
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            textAlign="left"
            marginBottom={6}
            color={"white"}
          >
            Login to your account
          </Typography>
          <Typography
            variant="body1"
            fontWeight={400}
            textAlign="left"
            marginBottom={4}
            color={"white"}
          >
            Don't have an account?{" "}
            <a className={styles.signupLink} href="google.com">
              Sign Up
            </a>
          </Typography>
          <Box
            className={styles.loginBox}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextBox
              label="Email Address"
              required
              fullWidth
              name="email"
              autoFocus
              onChange={handleChange}
            ></TextBox>
            <TextBox
              label="Password"
              required
              fullWidth
              name="password"
              type="password"
              autoFocus
              onChange={handleChange}
            ></TextBox>
            <Box height={20} />
            <MainButton fullWidth type="submit">
              Sign In
            </MainButton>
          </Box>
        </Box>
      </Box>
      <Box display={{ xs: "none", md: "block" }}>
        <img
          className={styles.loginBackground}
          src={img.imgURL}
          alt="Login Background"
          // height="100%"
        ></img>
      </Box>
    </Box>
  );
};

export default LoginForm;
