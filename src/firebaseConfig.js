// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBepYuk5oxVa-cEJe1XTch-yxjwXzkx2vs",
  authDomain: "u-shop-f3a04.firebaseapp.com",
  projectId: "u-shop-f3a04",
  storageBucket: "u-shop-f3a04.appspot.com",
  messagingSenderId: "47143731570",
  appId: "1:47143731570:web:6ce96b7832e56f35679deb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// Config Alex
// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCJ-N7w_R1Q7l9s4wXE0TbS9DPH9FXe1HI',
//   authDomain: 'u-shop-84196.firebaseapp.com',
//   projectId: 'u-shop-84196',
//   storageBucket: 'u-shop-84196.appspot.com',
//   messagingSenderId: '79697228939',
//   appId: '1:79697228939:web:0717490bf8529490a4908e',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
