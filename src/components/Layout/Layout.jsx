import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
// import { Footer } from "../Footer/Footer";
import "./Layout.css";

export const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
