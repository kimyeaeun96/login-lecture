"use strict"

//모듈
const express = require('express');
const app = express();

const PORT = 8080;

//라우팅
const home = require("./src/routes/home") // [routes]-[home] 안의 자스 읽어와 

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("home/index");
});

app.get('/login', (req, res)=> {
    res.render("home/login");
});
app.use(express.static(`${__dirname}/src/public`));
app.use("/",  home); // use -> 미들 웨어를 등록해주는 메소드.

module.exports = app;