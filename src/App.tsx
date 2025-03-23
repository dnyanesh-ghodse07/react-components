import { Route, Routes } from "react-router-dom";
import "./App.css";
import OtpInputPage from "./pages/otp_input/OtpInputPage";
import StarRatingPage from "./pages/star_rating";
import FilesPage from "./pages/files";
import Home from "./pages/home";
import ComponentsPage from "./pages/components";
import Navbar from "./components/UI/Navbar";
import PaginationPage from "./pages/pagination";

function App() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/components/star-rating" element={<StarRatingPage />} />
        <Route path="/components/file-explorer" element={<FilesPage />} />
        <Route path="/components/pagination" element={<PaginationPage />} />
        <Route path="/components/otp-input" element={<OtpInputPage />} />
      </Routes>
    </div>
  );
}

export default App;