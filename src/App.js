import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies/>
    </div>
  );
}
const Header = () => {
  return (
    <div className="header">
      <a href='#'>Home</a>
      <a href='#'>New Feed</a>
      <a href='#'>Messages</a>
    </div>
  );
}
const Technologies = () => {
  return (
    <div className="technologies">
      <ul>
        <li>css</li>
        <li>js</li>
        <li>jsx</li>
      </ul>
    </div>
  );
}

export default App;
