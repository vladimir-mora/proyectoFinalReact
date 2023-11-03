import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Button onClick={restar} sx={{ marginRight: "20px" }}>
          {" "}
          <RemoveIcon />{" "}
        </Button>
        <Typography variant="h3"> {contador} </Typography>
        <Button onClick={sumar} sx={{ marginLeft: "20px" }}>
          {" "}
          <AddIcon />{" "}
        </Button>
      </Box>
      <Button
        onClick={() => onAdd(contador)}
        variant="contained"
        sx={{
          marginTop: "25px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};

export default CounterPresentacional;
