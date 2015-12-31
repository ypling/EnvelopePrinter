/**
 * Created by chenghui on 12/30/2015.
 */
import $ from '../../../../bower_components/jQuery/dist/jquery.min.js'
var host='http://localhost:3000';
export default {
  getAddrs(cb){
    $.get(host+'/receiverAddrs',cb)
  },
  postAddr(addr,cb){
    $.post(host+'/editReceiverAddr',addr,cb);
    //$.ajax({
    //  type: "post",
    //  data: addr,
    //  url:host+'/receiverAddr',
    //});
  },
  removeAddr(addr,cb){
    $.post(host+'/removeReceiverAddr',addr,cb);
  }
}
