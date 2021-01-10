import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsvaXysqEUv6xsjs9Q4ZZdcmx8abo0xg4",
  authDomain: "le4ka-6b9c5.firebaseapp.com",
  databaseURL: "https://le4ka-6b9c5.firebaseio.com",
  projectId: "le4ka-6b9c5",
  storageBucket: "le4ka-6b9c5.appspot.com",
  messagingSenderId: "195151089775",
  appId: "1:195151089775:web:534e858f0c7a67611b3d9a",
  measurementId: "G-XTMX7YFBXG"
};

firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App fb={firebase} />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
