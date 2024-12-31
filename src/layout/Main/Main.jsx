import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Main = () => {
  return (
    <div className="max-w-screen-2xl mx-auto font-inter">
      <Navbar />
      <div className="min-h-[calc(100vh-298px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
