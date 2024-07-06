import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/Home/HomePage";
import Login from "./components/AuthPage/Login";
import SignUp from "./components/AuthPage/Signup";
import BlogPage from "./components/BlogPage/BlogPage";

function App() {
  return (
    <AuthProvider>
      <Box display={"flex"} flexDir={"column"} minHeight={"100vh"}>
        <Router>
          <NavBar />
          <Box as="main" flex="1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="posts/:postId" element={<BlogPage />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </Box>
    </AuthProvider>
  );
}

export default App;
