import './App.css';
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import NewsContainer from './components/News/NewsContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/login/LoginContainer';
import { initializeApp } from "./redux/app-reducer";
import React from 'react';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if(!this.props.initialazed){
      return <Preloader/>
    }
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <div className="grid">
            <HeaderContainer />
            <Navigation />
            <div className='app-wrapper-content'>
              <Routes>
                <Route path='/'
                  element={<ProfileContainer />} />
                <Route path='/dialogs'
                  element={<DialogsContainer />} />
                <Route path='/login'
                  element={<LoginContainer />} />
                <Route path='/profile'
                  element={<ProfileContainer />} />
                <Route path='/profile/:id?'
                  element={<ProfileContainer />} />

                <Route path='/users' element={<UsersContainer />} />
                <Route path='/news' element={<NewsContainer />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

const mapStateToProps = (state) =>({
  initialazed:state.app.initialazed
})

export default connect(mapStateToProps, {initializeApp})(App)

