import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'T-Shirt', price: 499, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jeans', price: 999, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Shoes', price: 1499, image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name}/>
          <h2>{product.name}</h2>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
