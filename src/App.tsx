import { Route, Routes } from "react-router-dom";
import "./App.css";
import ComponentsPage from "./pages/component_list";
import OtpInputPage from "./pages/component_list/otp_input";
import StarRatingPage from "./pages/component_list/star_rating";
import FilesPage from "./pages/component_list/files";
import Home from "./pages/home";
import PaginationPage from "./pages/component_list/pagination_page";
import Navbar from "./components/UI/Navbar";
import Utilities from "./pages/utility_functions";
import UtilityDetailPage from "./pages/utility_functions/UtilityDetailPage";

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
        <Route path="/utilities" element={<Utilities />} />
        <Route path="/utility_functions/:title" element={<UtilityDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;