const express = require('express');
const session = require('express-session');
const ejs = require('ejs');

const app = express();
const router = require('./router');
const DBManager = require('./DBManager');
const hostname = '127.0.0.1';
const port = 4500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
  key: 'sid', // 세션의 키 값
  secret: 'secret', // 세션의 비밀 키
  resave: false, // 세션 항상 저장 여부
  saveUninitialized: true, // 세션이 저장되기전 상태
  cookie: { // 쿠키 설정
    maxAge: 24000 * 60 * 60
  }
}))
app.use(express.static("views"));
app.use("/", router);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
