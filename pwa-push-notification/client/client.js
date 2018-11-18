const publicVapidKey =
'BHtIQCaT9VBOkbMXvjEWdg7JpLbPxc0AtoybxlDw8ZHB0FRfXvIF5WlQHvZM2GuMypaO9Z3GYEwuPFUl6PkAQhg'
if('serviceWorker' in navigator){
    send().catch(err=> console.error(err));
}

//注册 SW 注册 push send push
async function send() {
    // Register Service workd
    console.log('Registering service worker...');
    const registration = await navigator.serviceWorker.register('./worker.js',{
        scope:'/'
    });

    console.log('完成 Service Worker 注册...');

    //注册推送
    console.log('开始注册推送...');

    console.log(registration);
    console.log(urlBase64ToUint8Array(publicVapidKey))
    const subscription = await registration.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:urlBase64ToUint8Array(publicVapidKey)
    });

    console.log('完成推送注册...');

    //send Push Notification
    console.log('开始发送推送...');

    fetch('subscribe',{
        method:'POST',
        body:JSON.stringify(subscription),
        headers:{
            'content-type':'application/json'
        }
    }).then(function(res){
        console.log(res);
    }).catch(function(err){
        console.log(err);
    })

    await fetch('subscribe',{
        method:'POST',
        body:JSON.stringify(subscription),
        headers:{
            'content-type':'application/json'
        }
    });

    console.log('Push Sent...')
}
//转换函数
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }