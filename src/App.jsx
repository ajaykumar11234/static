import './App.css';

function App() {
  const handleClick = () => {
    alert("Hello from Ajay! 👋");
  };

  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <p>This is a simple app deployed on Vercel.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
