//1.引入express
const express = require("express");
//2.创建应用对象
const app = express();
//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get("/server", (request, response) => {
	//设置响应头 设置允许跨域
	response.setHeader("Access-Control-Allow-Origin", "*");
	//设置响应体
	response.send("hello JSON GET");
});

//可以接受任意类型的请求
app.all("/json-server", (request, response) => {
	//设置响应头 设置允许跨域
	response.setHeader("Access-Control-Allow-Origin", "*");
	//响应头,允许自定义头部信息
	response.setHeader("Access-Control-Allow-Headers", "*");
	//响应一个数据
	const data = {
		name: "Frank",
	};
	let str = JSON.stringify(data);
	//设置响应体
	response.send(str); //send里只能是字符串或者BUFFER
});
//ie缓存处理
app.get("/ie", (request, response) => {
	//设置响应头 设置允许跨域
	response.setHeader("Access-Control-Allow-Origin", "*");
	//设置响应体
	response.send("hello IE-2");
});
//延时响应
app.get("/delay", (request, response) => {
	//设置响应头 设置允许跨域
	response.setHeader("Access-Control-Allow-Origin", "*");
	//设置响应体
	setTimeout(() => {
		response.send("延时响应");
	}, 3000);
});
//jQuery服务
app.all("/jquery-server", (request, response) => {
	//设置响应头 设置允许跨域
	response.setHeader("Access-Control-Allow-Origin", "*");
	const data = { name: "Frank", age: "25" };
	const str = JSON.stringify(data);
	// response.send("hello jquery ajax");
	response.send(str);
});
app.listen(8000, () => {
	console.log("服务已经启动，8000端口监听中....");
});
