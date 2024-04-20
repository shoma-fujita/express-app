const express = require('express');
const router = express.Router();

// app.jsでアドレスと呼び出される設定は済みなので、ここの「/」は「/hello/ooo」の/ooo部分
router.get('/', (req, res, next) => {
  // reqオブジェクトのqueryからnameとmailの値を取り出している
  var name = req.query.name;
  var mail = req.query.mail;
  var data = {
    title: 'Hello!',
    content: 'あなたの名前は、' + name + '。<br>' +
      'メールアドレスは、' + mail + 'です。'
  };
  res.render('hello', data);
});

module.exports = router;