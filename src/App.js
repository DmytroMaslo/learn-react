import './App.css';
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import NewsContainer from './components/News/NewsContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/login/LoginContainer';
import { initializeApp } from "./redux/app-reducer";
import React, { Suspense } from 'react';
import Preloader from './components/common/Preloader/Preloader';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialazed) {
      return <Preloader />
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
                  element={<Suspense fallback={<div>Loading...</div>}>
                    <DialogsContainer />
                  </Suspense>} />
                <Route path='/login'
                  element={<LoginContainer />} />
                <Route path='/profile'
                  element={<Suspense fallback={<div>Загрузка...</div>}>
                    <ProfileContainer />
                  </Suspense>} />
                <Route path='/profile/:id?'
                  element={<ProfileContainer />} />

                <Route path='/users' element={<Suspense fallback={<div>Загрузка...</div>}>
                  <UsersContainer />
                </Suspense>} />
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

const mapStateToProps = (state) => ({
  initialazed: state.app.initialazed
})

export default connect(mapStateToProps, { initializeApp })(App)

