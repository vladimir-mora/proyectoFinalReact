import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

export const CartReturn = ({
  cart,
  total,
  deleteProductSwitAlert,
  cleartSwitAlert,
}) => {
  return (
    <Container maxWidth="xl0" sx={{ backgroundColor: "#F8F8FF" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" pt={3} pb={1} sx={{ textAlign: "center" }}>
            CARRITO DE COMPRAS
          </Typography>
          <hr
            style={{
              border: "0",
              height: "12px",
              boxShadow: "inset 0 12px 12px -12px black",
              marginBottom: "1.3em",
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Box
            spacing={4}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              justifyContent: "center",
            }}
          >
            {cart.map((product) => (
              <Card key={product.id} sx={{ maxWidth: 500 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.img}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" pb={1}>
                    {product.title}
                  </Typography>
                  <Typography variant="h6" pb={1}>
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" pb={1}>
                    cantidad: {product.quantity}
                  </Typography>
                  <IconButton
                    onClick={() => deleteProductSwitAlert(product.id)}
                  >
                    <DeleteIcon
                      fontSize="large"
                      color="primary"
                      sx={{ "&:hover": { color: "#d32f2f" } }}
                    />
                  </IconButton>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
        {cart.length > 0 ? (
          <Grid item xs={4}>
            <Box>
              <Stack
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-start"
                spacing={2}
                mt={5}
                sx={{ minHeight: "100%" }}
              >
                <Typography variant="h4">
                  El total a pagar es:
                  <hr style={{ border: "none", paddingTop: ".5em" }} /> ${total}
                </Typography>
                <Box sx={{ direction: "row" }}>
                  <Link to="/checkout">
                    <Button variant="contained">Finalizar Compra</Button>
                  </Link>
                  <Button
                    variant="contained"
                    onClick={cleartSwitAlert}
                    sx={{
                      marginLeft: "1.2em",
                      "&:hover": { backgroundColor: "#d32f2f" },
                    }}
                  >
                    Vaciar Carrito
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>
        ) : (
          <Box
            sx={{
              height: "40vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "10em",
            }}
          >
            <Typography variant="h2">
              ¡Tu carrito esta vacio! Descubre nuestros productos{" "}
            </Typography>
            <Link to="/">
              <Button variant="contained" sx={{ marginTop: "2em" }}>
                Mirar Productos
              </Button>
            </Link>
          </Box>
        )}
      </Grid>
    </Container>
  );
};
