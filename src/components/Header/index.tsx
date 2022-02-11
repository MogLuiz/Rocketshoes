// Packages
import { Link } from "react-router-dom";

// Assets
import { MdShoppingBasket } from "react-icons/md";
import logo from "../../assets/images/logo.svg";

// Hooks
import { useCart } from "../../hooks/useCart";

// Styles
import { Container, Cart } from "./styles";

const Header = (): JSX.Element => {
  // -------------------------------------------------
  // CONSTANTS
  // -------------------------------------------------

  const { cart } = useCart();
  const cartSize = cart.length; // TODO;

  console.log({ cart, cartSize });

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
