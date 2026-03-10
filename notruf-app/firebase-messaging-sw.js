importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyDVFWBprRzsM_SbQ2kTVfOEu0KZF5K77x4",
  authDomain: "interner-notruf.firebaseapp.com",
  projectId: "interner-notruf",
  storageBucket: "interner-notruf.firebasestorage.app",
  messagingSenderId: "1012047231256",
  appId: "1:1012047231256:web:4ab44e4e95410f8255066d"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon-192.png"
  });
});