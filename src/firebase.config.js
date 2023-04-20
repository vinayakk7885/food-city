import {getApp,getApps,initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAyQypiOHn4UdwAcUcTTGWmhQVqJSyAG8A",
    authDomain: "restaurent-app-f5516.firebaseapp.com",
    databaseURL: "https://restaurent-app-f5516-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "restaurent-app-f5516",
    storageBucket: "restaurent-app-f5516.appspot.com",
    messagingSenderId: "36192795657",
    appId: "1:36192795657:web:9afbd55bd3125428058cd8"
  };
  
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export{app,firestore,storage};