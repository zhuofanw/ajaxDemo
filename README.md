# ajaxDemo
#AJAX
Ajax 的优点: 
  1.可以无需刷新页面而与服务器端进行通信<br>
  2.允许你根据用户事件来耿勋部分页面内容
Ajax 的缺点： 
  1.没有浏览历史，不能回退 <br>
  2.存在跨域问题（同源）<br>
  3.SEO 不友好
##Http

##请求报文
重点是格式与参数

```
行  POST / URL /HTTP/1.1
头  Host:www.baidu.com
    Cookie: name = frank
    Content-type: application/x-www-form-unlencoded
    User-Agent: chrome 86
空行
体 username=admin&password=admin
```

##响应报文

```
行  HTTP1.1 200 OK

头  Content-type:text/html;charset=utf-8
    Content-length:2048
    Content-encoding:gzip

空行

体  <html>
        <head>
        </head>
        <body>
            <h1>DEMO</h1>
        </body>
    </html>
```

*404 Not Found
*403 Forbidden
*401 Unauthorized
*500 Internal server error
*200 OK
