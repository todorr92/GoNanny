import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HowItWorksParents from "./pages/HowItWorksParents";
import HowItWorksSitters from "./pages/HowItWorksSitters";
import FAQParents from "./pages/FAQParents";
import FAQSitters from "./pages/FAQSitters";
import JobsBoard from "./pages/JobsBoard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/home" element={<Header />}></Route>
        <Route
          path="/parents/how-it-works"
          element={<HowItWorksParents />}
        ></Route>
        <Route path="/parents/FAQ's" element={<FAQParents />}></Route>
        <Route
          path="/sitters/how-it-works"
          element={<HowItWorksSitters />}
        ></Route>
        <Route path="/sitters/FAQ's" element={<FAQSitters />}></Route>
        <Route path="/jobs-board" element={<JobsBoard />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
