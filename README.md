# openWeatherAPI

### Using open weather's data to make a search maryland weather's samll app. 
##### users send requst to my server, and then I send request to other server to find the data throug API, and data send back to my server, I response to users browser. 
##### The npm init command is used to create a Node. js project. The npm init command will create a package where the project files will be stored. All the modules you download will be stored in the package.
* https://openweathermap.org/weather-conditions

* api.openweathermap.org/data/2.5/weather?q=Maryland&appid=6e4a87e210348a9ec7182d2d1c7bcc59&units=metric  (use postman to make the request link)

1. cd Desktop/
2. mkdir file_name
3. cd file_name/
4. touch name.js
5. touch name.html anotherName.html
6. npm init  (The npm init command is used to create a Node. js project. The npm init command will create a package where the project files will be stored. All the modules you download will be stored in the package.)
7. npm install body-parser express request
8. code .
9. start write request and response code in name.js

## npm install body-parser express request

* Express is a web application framework of node js. It offers a range of features for building mobile and web applications - from building a single page, to multipages, and an entire hybrid web application.
* Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

*使用 Express 可以快速地搭建一个完整功能的网站。

* Express 框架核心特性：

* 可以设置中间件来响应 HTTP 请求。

* 定义了路由表用于执行不同的 HTTP 请求动作。

* 可以通过向模板传递参数来动态渲染 HTML 页面。


##### 以上命令会将 Express 框架安装在当前目录的 node_modules 目录中， node_modules 目录下会自动创建 express 目录。以下几个重要的模块是需要与 express 框架一起安装的：

* body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。

* cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。

* multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

### What is request package npm?
* Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

### Body-parser parses is an HTTP request body that usually helps when you need to know more than just the URL being hit. Specifically in the context of a POST, PATCH, or PUT HTTP request where the information you want is contained in the body. Using body-parser allows you to access req.
##### body-parser: node.js body 解析中间件
* 处理程序之前，在中间件中对传入的请求体进行解析（response body）
* body-parser 提供四种解析器
   1.  JSON body parser
   2.  Raw body parser
    3. Text body parser
    4. URL-encoded form body parser


### How do I make a simple node server? Set Up and Run a Simple Node Server Project
1. Go to the NodeJS website and download NodeJS
2. Make sure Node and NPM are installed and their PATHs defined
3. Create a new project folder
4. Start running NPM in your project folder (it runs in the background)
. Install any NPM packages we need
6. Create an HTML file in the project folder (this is what the client will see)
7. Create a Node/JavaScript file in the project folder (this is your server file)
8. Run your server
9. Visit your (local) website!
