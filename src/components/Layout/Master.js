import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Master = () => {
  return (
    <div className="font-body">
      <div className="container mx-auto">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Master;
