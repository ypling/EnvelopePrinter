import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import service from '../services/envelope/receiverAddress'

/* eslint-disable no-console */

export default {
  //addItem(text) {
  //
  //  Dispatcher.handleViewAction({
  //    type: Constants.ActionTypes.TASK_ADDED,
  //    text: text
  //  });
  //}
  list(){
    service.getAddrs(function (data, status) {
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.LIST,
        receiverAddrs: data
      })
    });
  },
  edit(receiverAddr){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.EDIT,
      receiverAddr: receiverAddr
    })
  },
  print(receiverAddr){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.PRINT,
      receiverAddr: receiverAddr
    })
  },
  remove(receiverAddr){
    service.removeAddr(receiverAddr, function (data, status) {
      console.log(data);
    });
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.DELETE,
      receiverAddr: receiverAddr
    })
  },
  save(newAddr, oldAddr){
    service.postAddr({
      newAddr: newAddr,
      oldAddr: oldAddr
    }, function (data, status) {
      console.log(data);
    });
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.SAVE,
      newAddr: newAddr,
      oldAddr: oldAddr
    })
  }


};
