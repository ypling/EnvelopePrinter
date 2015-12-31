import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import API from '../APIs/mock/envelopePrinterAPI'

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
    //var addrs=API.getAddrs();
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.LIST
    })
  },
  edit(receiverAddr){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.EDIT,
      receiverAddr:receiverAddr
    })
  },
  print(receiverAddr){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.PRINT,
      receiverAddr:receiverAddr
    })
  },
  remove(receiverAddr){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.DELETE,
      receiverAddr:receiverAddr
    })
  },
  save(newAddr,oldAddr){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.SAVE,
      newAddr:newAddr,
      oldAddr:oldAddr
    })
  }


};
