import { useCart } from '../context/CartContext';

const Header = ({ toggleCart }) => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1>🛍️ Ajay's Shop</h1>
      <button onClick={toggleCart}>
        Cart ({totalItems})
      </button>
    </header>
  );
};

export default Header;
