import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AddPost,
  Dashboard,
  Help,
  LoginForm,
  SignupForm,
} from "./components/Pages";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Row } from "./components/Layouts";

const checkLoggedIn = () => {
  if (localStorage.getItem("user") == null) {
    return false;
  } else {
    return true;
  }
};

function App() {
  const [loggedIn, setLoggedIn] = useState(checkLoggedIn());

  useEffect(() => {
    setLoggedIn(checkLoggedIn());
  });

  return (
    <div className="App">
      <Router>
        {loggedIn ? (
          <>
            <Row alignItems="start" justifyContent="start" gap="20px">
              <NavBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/addpost" element={<AddPost />} />
                <Route path="/help" element={<Help />} />
                <Route path="/*" element={<Dashboard />} />
              </Routes>
            </Row>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/*" element={<LoginForm />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
