const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,"client")));

app.use(bodyParser.json());

const publicVapidKey = 'BHtIQCaT9VBOkbMXvjEWdg7JpLbPxc0AtoybxlDw8ZHB0FRfXvIF5WlQHvZM2GuMypaO9Z3GYEwuPFUl6PkAQhg';
const privateVapidKey = 'b4cB1mJ0_PUgL6waK8PRnY6xpuFlTJPC87MT5NTeHFo';

webpush.setVapidDetails('mailto:test@test.com',publicVapidKey,privateVapidKey);

//订阅
app.post('/subscribe',(req,res)=>{
    //获取订阅对象
    const subscription = req.body;
    console.log(subscription)
    //发送状态码 201
    res.status(201).json({});

    //创建 payload
    const payload = JSON.stringify({
        title:'测试推送'
    });

    //pass object into sendNotification
    webpush.sendNotification(subscription,payload).catch(err=> console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`服务运行在${port}端口`))