import Events from "@/pages/Events";
import Profile from "@/pages/Profile";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import AboutUs from "../pages/facts/AboutUs";
import EmailNow from "../pages/facts/EmailNow";
import Faqs from "../pages/facts/Faqs";
import PrivacyPolicy from "../pages/facts/PrivacyPolicy";
import Home from "../pages/Home";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Networking from "../pages/Networking";
import Notification from "../pages/Notification";
import SharedGallery from "../pages/SharedGallery";
import Signup from "../pages/Signup";

export default function RoutesHandler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/networking" element={<Networking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/shared-gallery" element={<SharedGallery />} />
      <Route path="/events/:id" element={<Events />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/facts">
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="email-now" element={<EmailNow />} />
      </Route>
    </Routes>
  );
}
