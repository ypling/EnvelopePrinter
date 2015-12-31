/**
 * Created by chenghui on 12/30/2015.
 */
//var mongojs = require('mongojs');
//var db = mongojs('localhost:27017/envelopePrinterDB');
//db.on('connect',function(){
//  console.log('database connected')
//});
export default {
  getAddrs(){
    db.addrs.find(function(err,result){
      return result;
    });
  },
  postAddr(addr){
    db.addrs.insert(addr);
  },
  updateAddr(){},
  removeAddr(){}
}

