import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import { Typography, Container, Box, Button } from "@mui/material";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <Container
      maxWidth="x10"
      sx={{
        display: "flex",
        height: "auto",
        backgroundColor: "#f8f8ff",
        justifyContent: "center",
        paddingTop: "4em",
        paddingBottom: "3em",
      }}
    >
      <img
        src={productSelected.img}
        style={{
          maxHeight: "60vh",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      />
      <Box
        spacing={2}
        sx={{
          direction: "column",
          alignItems: "center",
          paddingLeft: "3em",
          paddingTop: "7em",
        }}
      >
        <Typography variant="h3">{productSelected.title}</Typography>
        <Typography
          variant="h4"
          sx={{
            marginTop: ".5em",
            marginBottom: "1em",
          }}
        >
          ${productSelected.price}
        </Typography>

        {showCounter ? (
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        ) : (
          <Link to="/cart">
            <Button variant="contained">Ir al carrito</Button>
          </Link>
        )}

        {initial && (
          <Typography
            variant="h4"
            sx={{
              marginTop: "1em",
              marginBottom: "1em",
            }}
          >
            Ya tienes {initial} unidades en el carrito
          </Typography>
        )}
      </Box>
    </Container>
  );
};
