

const express = require("express");
//make get request to external server node
//we can go to node.js web to find how to write the code to get external server
const https = require("https");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(_dirname+"/index.html")
    
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

app.post("/", function(req, res){
  
const query=req.body.cityName;
const apiKey="6e4a87e210348a9ec7182d2d1c7bcc59";
const unit = "metric";
const url="https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

https.get(url, function(response){

    //statusCode is 200. we can go to MDN web docs to check what 200 means
    console.log(response.statusCode);
    response.on("data", function(data){
        //console.log(data)
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp
        const description = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
        //console.log(weatherData);
//we only can have one send, but we can have sevel .write
        //res.send("<h1>The temperature in Maryland is "+temp+"degrees Celcius.</h1>")
        res.write("<p>The weather is currently "+description+"<p>");
        res.write("<h1>The temperature in Maryland is "+temp+"degrees Celcius.</h1>")
        res.write("<img src=" + imageURL +">")
        res.send()
        //const object={
            //name:"Jia"
            //favouriteFood:"noodle"
       // }
        //console.log(JSON.stringify(object));
    })
})
//res.send("Server is up and running")

})



