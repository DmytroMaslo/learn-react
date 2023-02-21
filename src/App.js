import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="grid">
          <Header />
          <Navigation />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/dialogs' element={<Dialogs />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}



export default App;
