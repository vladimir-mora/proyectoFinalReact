import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Box } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <Box sx={{ marginTop: "30px" }}>
        <Badge badgeContent={total} showZero color="primary">
          <ShoppingCartIcon fontSize={"large"} color="primary" />
        </Badge>
      </Box>
    </Link>
  );
};

export default CartWidget;
