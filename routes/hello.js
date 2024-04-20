const express = require('express');
const router = express.Router();

// app.jsでアドレスと呼び出される設定は済みなので、ここの「/」は「/hello/ooo」の/ooo部分
router.get('/', (req, res, next) => {
  var data = {
    title: 'Hello!',
    content: '※何か書いて送信して下さい。'
  };
  res.render('hello', data);
});

router.post('/post', (req, res, next) => {
  // postで送信されたメッセージの中身を取り出すことができる
  var msg = req.body['message'];
  var data = {
    title: 'Hello!',
    content: 'あなたは、「' + msg + '」と送信しました。'
  };
  res.render('hello', data);
});

module.exports = router;
