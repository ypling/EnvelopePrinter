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

  edit(receiverAdd){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.EDIT,
      receiverAdd:receiverAdd
    })
  },
  print(receiverAdd){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.PRINT,
      receiverAdd:receiverAdd
    })
  },
  add(){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.ADD
    })
  },
  saveAdd(receiverAdd){
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.SAVE_ADD,
      receiverAdd:receiverAdd
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
