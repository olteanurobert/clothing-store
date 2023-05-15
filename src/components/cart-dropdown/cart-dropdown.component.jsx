// React
import { useContext } from "react";

// Styles
import "./cart-dropdown.styles.scss";

// Global Components
import Button from "../button/button.component";

// Components
import CartItem from "../cart-item/cart-item.component";

// Context
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};
export default CartDropdown;
