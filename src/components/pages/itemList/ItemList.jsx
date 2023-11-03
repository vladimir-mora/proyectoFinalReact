import { Typography, Stack, Container, Box } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import banner from "../../../assets/img/banner-sneaker.png";

const ItemList = ({ items }) => {
  return (
    <>
      <Box>
        <img src={banner} style={{ width: "100%", minHeight: "150px" }} />
      </Box>
      <Container maxWidth="x10" sx={{ backgroundColor: "#F8F8FF" }}>
        <Typography
          variant="h2"
          pt={5}
          pb={5}
          align="center"
          sx={{ fontFamily: "cursive", fontWeight: "bold", fontSize: "5em" }}
        >
          TODOS NUESTROS PRODUCTOS
        </Typography>
        <Stack
          direction={{ xs: "row" }}
          flexWrap="wrap"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent={{ xs: "center" }}
          gap={2}
        >
          {items.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </Stack>
      </Container>
    </>
  );
};

export default ItemList;
