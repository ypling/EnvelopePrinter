import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

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
  add(){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.ADD
    })
  },
  saveAdd(receiverAddr){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.SAVE_ADD,
      receiverAddr:receiverAddr
    })
  },
  saveEdit(newAdd,oldAdd){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.SAVE_EDIT,
      newAdd:newAdd,
      oldAdd:oldAdd
    })
  }


};
