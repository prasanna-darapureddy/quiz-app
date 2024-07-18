importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCDlh_FfVAY7wzN2ZUt7VCR-jxRRhBvbbY",
    authDomain: "fir-login-412706.firebaseapp.com",
    projectId: "firebase-login-412706",
    storageBucket: "firebase-login-412706.appspot.com",
    messagingSenderId: "247129245560",
    appId: "1:247129245560:web:e284581e6880cfea026a8d",
    measurementId: "G-CCKP5PPQRR"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});


