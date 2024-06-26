// 必要なモジュールのロード
var createError = require('http-errors');
var express = require('express');
var path = require('path');
// クッキーのパース（値を変換する処理）
var cookieParser = require('cookie-parser');
// HTTPリクエストのログ出力
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 設定したモジュールの呼び出し
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var session_opt = {
  // 秘密キーで、セッションID等でハッシュ化するときに元となるキー
  secret: 'keyboard cat',
  // セッションストアに強制的に値を保存させるもの
  resave: false,
  // 初期化されていない値を保存するためのもの
  saveUninitialized: false, 
  // セッションの有効期限
  cookie: { maxAge: 60 * 60 * 1000 }
};
app.use(session(session_opt));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);

// エラーハンドラー
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
