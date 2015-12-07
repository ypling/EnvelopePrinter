import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _data = [];
let _targetIndex = -1;
let _time=new Date();

// add private functions to modify data
function _addItem(title, completed = false, createTime = (new Date()).toString(), editing = false) {
  _data = _data.concat({title, completed, createTime, editing});
}
function _clearList() {
  _data = [];
  TodoStore.emitChange();
}
function _taskCompleted(task) {
  _data[_data.indexOf(task)].completed = !_data[_data.indexOf(task)].completed;
  TodoStore.emitChange();
}
function _editTask(task, title) {
  _data[_data.indexOf(task)].title = title;
  TodoStore.emitChange();
}
function _toggleTaskState(task) {
  _data[_data.indexOf(task)].editing = !_data[_data.indexOf(task)].editing;
  TodoStore.emitChange();
}
function _printTask(task) {
  _targetIndex = _data.indexOf(task);
  _time=new Date();
  TodoStore.emitChange();
  //window.print();
}
// Facebook style store creation.
const TodoStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      tasks: _data,
      targetIndex: _targetIndex,
      clickPrintAt:_time
    };
  },
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
      case Constants.ActionTypes.TASK_ADDED:
        const text = action.text.trim();
        // NOTE: if this action needs to wait on another store:
        // Dispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (text !== '') {
          _addItem(text);
          TodoStore.emitChange();
        }
        break;
      case Constants.ActionTypes.CLEAR_LIST:
        _clearList();
        break;
      case Constants.ActionTypes.TASK_EDITED:
        _editTask(action.task, action.newTitle);
        break;
      case Constants.ActionTypes.TASK_COMPLETED:
        _taskCompleted(action.task);
        break;
      case Constants.ActionTypes.TASK_STATE:
        _toggleTaskState(action.task);
        break;
      case Constants.ActionTypes.TASK_PRINT:
        _printTask(action.task);
        break;

      // add more cases for other actionTypes...

      // no default
    }
  })
});

export default TodoStore;
