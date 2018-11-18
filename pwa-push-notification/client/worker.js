console.log('加载 service worker');

self.addEventListener('push',e => {
    const data = e.data.json();
    console.log('接收推送...');
    self.registration.showNotification(data.title,{
        body:'Notified by Jangwoo',
        icon:'https://maxcdn.icons8.com/Share/icon/nolan/Mobile/push_notifications1600.png'
    });
})