import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar.component";
import SideBarV2 from "./components/sidebarv2.component";
import HomePage from "./pages/home.page";
import About from "./pages/about.page";
import Services from "./pages/services.page";
import Resume from "./pages/resume.page";
import Testimonials from "./pages/testimonials.page";
import Blog from "./pages/blog.page";
import PortofolioV1 from "./pages/portofoliov0.1.page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SideBarV2 />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portofolio" element={<PortofolioV1 />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
