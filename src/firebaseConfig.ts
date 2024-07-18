// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken} from 'firebase/messaging';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDlh_FfVAY7wzN2ZUt7VCR-jxRRhBvbbY",
  authDomain: "fir-login-412706.firebaseapp.com",
  projectId: "firebase-login-412706",
  storageBucket: "firebase-login-412706.appspot.com",
  messagingSenderId: "247129245560",
  appId: "1:247129245560:web:e284581e6880cfea026a8d",
  measurementId: "G-CCKP5PPQRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const messaging = getMessaging(app);

export const requestForToken =async () => {
    try{
        const response=await getToken(messaging, { vapidKey: 'BE1H0BRyL9ALnFdD19HG4hMtUPEZ9ltZ6Qhj5juSPj2IeDPxCssopWkyyFNeFYK0QowOgQFYoWF-lKvPvpbUt9k' })
        console.log("FCM ",response)
        return response;
    }
  catch(error){
    console.log(error);
  }
  };