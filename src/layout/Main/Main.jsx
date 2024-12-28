import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <div className="min-h-[calc(100vh-298px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
