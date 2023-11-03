import { useContext } from "react";

import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

import { CartReturn } from "./CartReturn";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const cleartSwitAlert = () => {
    Swal.fire({
      title: "Seguro quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado!", "", "success");
      } else if (result.isDenied) {
      }
    });
  };

  const deleteProductSwitAlert = (productId) => {
    Swal.fire({
      title: "quieres eliminar el producto del carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductById(productId);
        Swal.fire("Producto eliminado!", "", "success");
      } else if (result.isDenied) {
      }
    });
  };

  return (
    <CartReturn
      cart={cart}
      total={total}
      deleteProductSwitAlert={deleteProductSwitAlert}
      cleartSwitAlert={cleartSwitAlert}
    />
  );
};

export default Cart;
