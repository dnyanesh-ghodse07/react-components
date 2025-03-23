import Files from "./components/Files/Files";
import Layout from "./pages/layout";
import { Route, Routes } from "react-router-dom";
import './App.css'
import PaginationPage from "./pages/Pagination";
import StarRating from "./components/StarRating/StarRating";
import OtpInputPage from "./pages/OtpInputPage/OtpInputPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/job-board" element={<Files />} />
          <Route path="/carousal" element={<Files />} />
          <Route path="/progress-bar" element={<Files />} />

          <Route path="/like-button" element={<Files />} />
          <Route path="/traffic-light" element={<Files />} />
          <Route path="/digital-clock" element={<Files />} />
          <Route path="/stopwatch" element={<Files />} />

          <Route path="/star-rating" element={<StarRating />} />
          <Route path="/file-explorer" element={<Files />} />
          <Route path="/pagination" element={<PaginationPage />} />
          <Route path="/otp-input" element={<OtpInputPage />} />

          <Route path="/nested-checkboxs" element={<Files />} />
          <Route path="/data-table" element={<Files />} />
          <Route path="/modal" element={<Files />} /> // https://www.greatfrontend.com/interviews/study/gfe75/questions/system-design/modal-dialog
          <Route path="/modal" element={<Files />} />
          <Route path="/modal" element={<Files />} />
          <Route path="/modal" element={<Files />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
