const express = require('express');
const router = express.Router();

// app.jsでアドレスと呼び出される設定は済みなので、ここの「/」は「/hello/ooo」の/ooo部分
router.get('/', (req, res, next) => {
var data = {
title: 'Hello!',
content: 'これは、サンプルのコンテンツです。<br>this is sample content.'
};
res.render('hello', data);
});

module.exports = router;