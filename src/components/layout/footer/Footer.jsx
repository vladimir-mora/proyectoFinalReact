import { Container, Box, List, ListItem } from "@mui/material";
import logo from "../../../assets/img/sneakerw.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Container
      maxWidth="xl0"
      sx={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={logo} style={{ width: "9vw" }} />
      <Box
        sx={{
          color: "white",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "space-around",
          width: "40%",
          fontSize: "29px",
          cursor: "pointer",
        }}
      >
        <FacebookRoundedIcon sx={{ fontSize: "29px" }} />
        <InstagramIcon sx={{ fontSize: "29px" }} />
        <TwitterIcon sx={{ fontSize: "29px" }} />
      </Box>
      <List
        sx={{
          color: "white",
          display: "flex",
          marginTop: "1rem",
          cursor: "pointer",
          width: "50%",
          justifyContent: "space-around",
        }}
      >
        <ListItem>Legal</ListItem>
        <ListItem>Cookies</ListItem>
        <ListItem>Privacy</ListItem>
        <ListItem>Shipping</ListItem>
        <ListItem>Refounds</ListItem>
      </List>
      <span style={{ color: "white", marginTop: ".8rem", opacity: "0.50" }}>
        &copy;2023SneakersWorld-VladimirMora
      </span>
    </Container>
  );
};

export default Footer;
