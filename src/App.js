import './App.css';


import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
const App = () => {
  return (
    <div className="app-wrapper">
      <div class="grid">
        <Header />
        <Navigation />
        <Profile />
      </div>
    </div>
  );
}



export default App;
