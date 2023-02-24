import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/headerFont.ttf';
import { addPost,updateNewPostText } from './redux/state.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        appState={state}
        addPost={addPost}
        updateNewPostText = {updateNewPostText} />
    </React.StrictMode>
  );
}

