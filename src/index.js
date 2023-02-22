import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/headerFont.ttf';

let data = {
  dialogs:[
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Nick' },
    { id: 3, name: 'Sam' },
    { id: 4, name: 'Daniel' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Dean' },
  ],
  messages:[
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Okey' },
    { id: 4, message: 'Yo!' },
    { id: 5, message: 'Yo@' },
    { id: 6, message: 'Yo?' },
    { id: 7, message: '%#&$#$?' },
  ],
   posts: [
    { id: 1, post: 'Hi! first message', likes: 3 },
    { id: 2, post: 'Using props!', likes: 5 },
    { id: 3, post: 'How are you?', likes: 7 },
    { id: 4, post: 'Spam message', likes: 4 },
    { id: 5, post: 'Just another post', likes: 9 },
    { id: 6, post: 'More post is better', likes: 13 },
]

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data = {data}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
