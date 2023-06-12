import {getApp,getApps,initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyAyQypiOHn4UdwAcUcTTGWmhQVqJSyAG8A",
//     authDomain: "restaurent-app-f5516.firebaseapp.com",
//     databaseURL: "https://restaurent-app-f5516-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "restaurent-app-f5516",
//     storageBucket: "restaurent-app-f5516.appspot.com",
//     messagingSenderId: "36192795657",
//     appId: "1:36192795657:web:9afbd55bd3125428058cd8"
//   };
  
  
  // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB4213KlBrSwu6q37qC1M4pz-TymqhiQe8",
//   authDomain: "food-city--app.firebaseapp.com",
//   projectId: "food-city--app",
//   storageBucket: "food-city--app.appspot.com",
//   messagingSenderId: "830942419283",
//   appId: "1:830942419283:web:fd5945fd1f47478bbc29a6"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCtSbLsGIc4cKIKdBCJUfQHCfgU1yemnqI",
  authDomain: "foodcity-app.firebaseapp.com",
  projectId: "foodcity-app",
  storageBucket: "foodcity-app.appspot.com",
  messagingSenderId: "820324964580",
  appId: "1:820324964580:web:a88507db91aeb5eb1f34f1"
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export{app,firestore,storage};

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCtSbLsGIc4cKIKdBCJUfQHCfgU1yemnqI",
//   authDomain: "foodcity-app.firebaseapp.com",
//   projectId: "foodcity-app",
//   storageBucket: "foodcity-app.appspot.com",
//   messagingSenderId: "820324964580",
//   appId: "1:820324964580:web:a88507db91aeb5eb1f34f1"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);