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
app.all("/delay", (request, response) => {
	//设置响应头 设置允许跨域
	response.setHeader("Access-Control-Allow-Origin", "*");
	//自定义头部信息
	response.setHeader("Access-Control-Allow-Headers", "*");
	//设置响应体
	const data = { name: "Frank", age: "25" };
	const str = JSON.stringify(data);
	setTimeout(() => {
		response.send(str);
	}, 1000);
});
//jQuery服务
app.all("/jquery-server", (request, response) => {
	//设置响应头 设置允许跨域
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Headers", "*");

	const data = { name: "Frank", age: "25" };
	const str = JSON.stringify(data);
	// response.send("hello jquery ajax");
	response.send(str);
});
app.all("/check-username", (request, response) => {
	const data = {
		exist: 1,
		msg: "用户名已经存在",
	};
	let str = JSON.stringify(data);
	response.end(`handle(${str})`);
});

app.all("/jquery-jsonp-server", (request, response) => {
	const data = {
		name: "frank",
		city: ["北京", "上海", "深圳"],
	};
	let str = JSON.stringify(data);
	//接收callback参数
	let cb = request.query.callback;
	response.end(`${cb}(${str})`);
});
app.listen(8000, () => {
	console.log("服务已经启动，8000端口监听中....");
});
