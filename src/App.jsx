import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Horoscopes from "./components/Horoscopes";
import ZodiacSigns from "./components/ZodiacSigns";
import Compatibility from "./components/Compatibility";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horoscopes" element={<Horoscopes />} />
        <Route path="/zodiac-signs" element={<ZodiacSigns />} />
        <Route path="/compatibility" element={<Compatibility />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
