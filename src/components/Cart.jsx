import { useCart } from '../context/CartContext';

const Cart = ({ goBack }) => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <button onClick={goBack} style={{ marginBottom: '1rem' }}>← Back to Products</button>

      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cart.map(item => (
          <div className="cart-item" key={item.id}>
            <p>{item.name} x {item.quantity}</p>
            <p>₹{item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
