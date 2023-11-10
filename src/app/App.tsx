import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "src/components/Navbar/Navbar";
import Footer from "src/components/Footer/Footer";
import Home from "src/pages/Home/Home";
import styled from "styled-components";
import { colors } from "src/colors";
import WholeSale from "src/pages/WholeSale/WholeSale";
import SecurePayment from "src/pages/SecurePayment/SecurePayment";
import Contact from "src/pages/Contact/Contact";
import Faq from "src/pages/Faq/Faq";
const AppWrap = styled.div`
  background-color: ${colors.beigewhite};
`;
export default function App() {
  return (
    <AppWrap>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wholesale" element={<WholeSale />} />
          <Route path="/secure-payment" element={<SecurePayment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </Router>
    </AppWrap>
  );
}
