import logo from './logo.svg';
import './App.css';

// #region Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLunIx2bjVAHQxynZQHW2io2DGbaiIh_I",
  authDomain: "lego-pub-we.firebaseapp.com",
  projectId: "lego-pub-we",
  storageBucket: "lego-pub-we.appspot.com",
  messagingSenderId: "930250520870",
  appId: "1:930250520870:web:90b530cc9f1589a01fe9e7",
  measurementId: "G-G1K4NZZC2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// #endregion

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Matyi!
        </p>
      </header>
    </div>
  );
}

export default App;
