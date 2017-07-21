var express = require('express');
var router = express.Router();
var fs = require('fs');
var shortid = require('shortid');
var PATH ='./public/data/';

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:6754");
    res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getnews',function(req,res,next){


    fs.readFile( PATH + 'message.json', function (err, data) {
    if (err) {
        return console.error(err);
    }
    res.send(data.toString());
    });
})

router.post('/addMessage', function (req, res) {

    // var file = req.files[0];
    // console.log('文件类型：%s', file.mimetype);
    // console.log('原始文件名：%s', file.originalname);
    // console.log('文件大小：%s', file.size);
    // console.log('文件保存路径：%s', file.path);
    // console.log('文件名：' + file.filename)
    // console.log(req)
//    console.log('text:' + req.body.text)

//    var des_file = __dirname + "/" + req.files[0].originalname;
//    console.log(des_file)

   fs.readFile(PATH + 'message.json',function(err,data){
      if(err){
         return console.error(err);
      }else{
          let json = JSON.parse(data.toString());
          let id = shortid();
          var img = "";
          if( req.files[0]){
              img = 'http://localhost:3000/upload/' + req.files[0].filename;
          }
          let item = {
                "id":id,
                "name":req.body.name,
                "head_img":"http://localhost:3000/images/icons/wbicon1_03.png",
                "news":req.body.text,
                "pic":img
            }

          json.data.unshift(item);
          json = JSON.stringify(json);

          fs.writeFile(PATH + 'message.json',json,function(err){
              if(err)console.err(err)
              else console.log('数据保存成功');
          })
      }
   })

});

module.exports = router;
