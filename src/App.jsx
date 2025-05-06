import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import './index.css';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <Header toggleCart={() => setShowCart(!showCart)} />
      {showCart ? (
        <Cart goBack={() => setShowCart(false)} />
      ) : (
        <ProductList />
      )}
    </CartProvider>
  );
}

export default App;
