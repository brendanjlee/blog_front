import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/AuthPage/Login";
import SignUp from "./components/AuthPage/Signup";

function App() {
  return (
    <Box display={"flex"} flexDir={"column"} minHeight={"100vh"}>
      <Router>
        <NavBar />
        <Box as="main" flex="1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
