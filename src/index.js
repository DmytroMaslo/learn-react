import reportWebVitals from './reportWebVitals';
import store from './redux/state.js'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/headerFont.ttf';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        appState={store.getState()}
        dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
}

rerenderEntireTree(store._state);

store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
