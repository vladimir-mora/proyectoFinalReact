import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { dataBase } from "../../../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutFormi = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", numero: "", email: "", dirrecion: "" },
    onSubmit: (data) => {
      const order = {
        buyer: data,
        items: cart,
        total: total,
        date: serverTimestamp(),
      };

      const ordersCollection = collection(dataBase, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((element) => {
        updateDoc(doc(dataBase, "products", element.id), {
          stock: element.stock - element.quantity,
        });
      });
      clearCart();
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El campo es obligatorio")
        .min(3, "debe tener al menos 3 caracteres")
        .max(18, "debe tener máximo 18 caracteres"),
      numero: Yup.string()
        .required("El campo es obligatorio")
        .min(3, "debe tener al menos 10 números")
        .max(20, "debe tener máximo 15 números"),
      dirrecion: Yup.string()
        .required("El campo es obligatorio")
        .min(3, "debe tener al menos 3 caracteres")
        .max(18, "debe tener máximo 50 caracteres"),
      email: Yup.string()
        .email("el email no es válido")
        .required("El campo es obligatorio"),
    }),
  });

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const total = getTotalPrice();
  const [orderId, setOrderId] = useState(null);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
      sx={{ backgroundColor: "#F8F8FF" }}
    >
      {orderId ? (
        <Box textAlign="center">
          <Typography variant="h3">
            Se enviara la confirmacion de pago a su email ¡Gracias por la
            compra! 🥳
          </Typography>
          <Link to="/">
            <Button
              variant="contained"
              sx={{ marginTop: "4em", width: "30em" }}
            >
              Volver al home
            </Button>
          </Link>
        </Box>
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                label="Nombre"
                variant="outlined"
                name="nombre"
                onChange={handleChange}
                helperText={errors.nombre}
                error={errors.nombre ? true : false}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Numero"
                variant="outlined"
                name="numero"
                onChange={handleChange}
                helperText={errors.numero}
                error={errors.numero ? true : false}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Dirrecion"
                variant="outlined"
                name="dirrecion"
                onChange={handleChange}
                helperText={errors.dirrecion}
                error={errors.dirrecion ? true : false}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleChange}
                helperText={errors.email}
                error={errors.email ? true : false}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" type="submit" fullWidth>
                Enviar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="error" type="button" fullWidth>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Box>
  );
};

export default CheckoutFormi;
