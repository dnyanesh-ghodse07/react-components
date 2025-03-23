import { Route, Routes } from "react-router-dom";
import "./App.css";
import PaginationPage from "./pages/pagination";
import OtpInputPage from "./pages/otp_input/OtpInputPage";
import StarRatingPage from "./pages/star_rating";
import FilesPage from "./pages/files";
import Home from "./pages/home";
import ComponentsPage from "./pages/components";
import Navbar from "./components/UI/Navbar";

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

{
  /* <Route path="/job-board" element={<Files />} />
          <Route path="/carousal" element={<Files />} />
          <Route path="/progress-bar" element={<Files />} />

          <Route path="/like-button" element={<Files />} />
          <Route path="/traffic-light" element={<Files />} />
          <Route path="/digital-clock" element={<Files />} />
          <Route path="/stopwatch" element={<Files />} /> */
}

{
  /* <Route path="/nested-checkboxs" element={<Files />} />
          <Route path="/data-table" element={<Files />} />
          <Route path="/modal" element={<Files />} /> // https://www.greatfrontend.com/interviews/study/gfe75/questions/system-design/modal-dialog
          <Route path="/modal" element={<Files />} />
          <Route path="/modal" element={<Files />} />
          <Route path="/modal" element={<Files />} /> */
}
