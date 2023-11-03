import { Outlet } from "react-router-dom";
import AppBarContainer from "./navbar/NavBarContainer";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <AppBarContainer />
      <Outlet />
      <div style={{ backgroundColor: "#f8f8ff" }}>
        <hr
          style={{
            color: "transparent",
            height: "50px",
            border: "none",
          }}
        />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
