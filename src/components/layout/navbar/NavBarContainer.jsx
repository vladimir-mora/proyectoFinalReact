import * as React from "react";
import AppBarReturn from "./NavBarReturn";

const pagesNike = ["Nike"];
const pagesAdidas = ["Adidas"];
const pagesPuma = ["Puma"];

const AppBarContainer = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBarReturn
        handleOpenNavMenu={handleOpenNavMenu}
        handleOpenUserMenu={handleOpenUserMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        anchorElNav={anchorElNav}
        anchorElUser={anchorElUser}
        pagesNike={pagesNike}
        pagesAdidas={pagesAdidas}
        pagesPuma={pagesPuma}
      />
    </>
  );
};

export default AppBarContainer;
