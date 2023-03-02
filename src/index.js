import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { initializeApp } from "firebase/app"
import bridge from '@vkontakte/vk-bridge'

bridge.send("VKWebAppInit")

const firebaseConfig = {
  apiKey: "AIzaSyC3m4uXkpZk5enCTFAklt4bvCqqKey7TAA",
  authDomain: "talks-a2a25.firebaseapp.com",
  databaseURL: "https://talks-a2a25-default-rtdb.firebaseio.com",
  projectId: "talks-a2a25",
  storageBucket: "talks-a2a25.appspot.com",
  messagingSenderId: "473663231260",
  appId: "1:473663231260:web:812b0d49ab402e0ffe96d9",
  measurementId: "G-FT7ZJW5FSK"
}

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
