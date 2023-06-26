import LoginForm from "./components/LoginForm";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "./components/SignupForm/SignupForm";
// import SignupForm from "./components/SignupForm/SignupForm";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/*" element={<LoginForm />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
