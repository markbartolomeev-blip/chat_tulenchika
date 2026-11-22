// Служебный файл уведомлений. Должен лежать в корне сайта: firebase-messaging-sw.js
// Конфиг ниже берётся из Firebase Console → Настройки проекта → Ваши приложения (веб).
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBfi_aHzkMG3vUUjaM_djwD0w62NNv3uI8',
  authDomain: 'tyulenchik-chat.firebaseapp.com',
  projectId: 'tyulenchik-chat',
  messagingSenderId: '303031812763',
  appId: '1:303031812763:web:9d4decf3f00a94d4563c3e'
});

// Уведомления с полем notification показываются автоматически.
firebase.messaging();

// Нажатие на уведомление открывает или фокусирует сайт
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      if (list.length) return list[0].focus();
      return clients.openWindow('/');
    })
  );
});
