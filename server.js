/**
 * Created by chenghui on 12/30/2015.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('localhost:27017/local', ['receiverAddrs']);

var _receiverAddrs = [{
  data: {
    fullName: "Chenghui Jin",
    line1: "519 Tumble Grass Ter",
    line2: "",
    city: "Fremont",
    state: "CA",
    ZIP: "94539"
  }
}];
var _senderAddr = {
  data: {
    fullName: "Chenghui Jin",
    line1: "519 Tumble Grass Ter",
    line2: "",
    city: "Fremont",
    state: "CA",
    ZIP: "94539"
  }
};

app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/receiverAddrs', function (req, res) {
  db.receiverAddrs.find(function (err, docs) {
    res.send(docs);
  });
});
//function list(db, requestData, res) {
//  var currentDate = new Date();
//  if (requestData) {
//    var username = requestData.username;
//    db.collection('users').findOne({username: username}, {fields: {scenarios: 1}}, function (err, user) {
//      var scenariosList = [];
//      if (user) {
//        user.scenarios.forEach(function (id) {
//          scenariosList.push(new ObjectId(id));
//        });
//        db.collection('scenarios').find({_id: {$in: scenariosList}}).toArray(function (err, result) {
//          console.log(result);
//          if (!err) {
//            res.send(result);
//          } else {
//            res.send({err: err});
//          }
//        });
//      }
//    });
//  }
//}
//app.get('/senderAddr', function (req, res) {
//  res.send(_senderAddr);
//});

app.post('/editReceiverAddr', function (req, res) {
  var addr = req.body;
  if (!addr.oldAddr) {
    db.receiverAddrs.insert({data: addr.newAddr}, function (err, doc) {
      res.send(doc)
    });
  } else {
    console.log(addr.oldAddr,addr.newAddr);
    db.receiverAddrs.findAndModify({query:{_id: mongojs.ObjectId(addr.oldAddr._id)},update: {$set: {data: addr.newAddr}},new:true}, function (err, doc) {
      res.send(doc)
    });
  }
});
app.post('/removeReceiverAddr', function (req, res) {
  db.receiverAddrs.remove({_id:mongojs.ObjectId(req.body._id)},{},function(err,doc){
    res.send(doc);
  });
});



app.listen(3000, function () {
  console.log('Ready on port 3000');
});


var http = require('http');
http.createServer(app).listen(1337, function () {
  console.log('Ready on port 1337');
}).on('listening', function () {
  console.log('listen')
});
