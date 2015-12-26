import assign from 'object-assign';
import {EventEmitter} from 'events';
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

// data storage
let _receiverAdds = [];
let _currentView = Constants.EnvelopePrinterAppViews.LIST;
let _currentReceiverAdd = _receiverAdds[0];

// add private functions to modify data
function _editView(receiverAdd) {
  console.log(receiverAdd);
  _currentView = Constants.EnvelopePrinterAppViews.EDIT;
  _currentReceiverAdd=receiverAdd;
  EnvelopeStore.emitChange();
}
function _addView() {
  _currentView = Constants.EnvelopePrinterAppViews.ADD;
  EnvelopeStore.emitChange();
}
function _printView(receiverAdd) {
  _currentView = Constants.EnvelopePrinterAppViews.PRINT;
  _currentReceiverAdd=receiverAdd;
  EnvelopeStore.emitChange();
}
function _saveAdd(receiverAdd) {
  _receiverAdds.push({data:receiverAdd});
  _currentView = Constants.EnvelopePrinterAppViews.LIST;
  EnvelopeStore.emitChange();
}
function _saveEdit(newAdd, oldAdd) {
  oldAdd.data=newAdd;
  _currentView = Constants.EnvelopePrinterAppViews.LIST;
  EnvelopeStore.emitChange();
}
// Facebook style store creation.
const EnvelopeStore = assign({}, EventEmitter.prototype, {
  // public methods used by Controller-View to operate on data
  getReceiverAdds() {
    return _receiverAdds;
  },
  getCurrentView() {
    return _currentView;
  },
  getCurrentReceiverAdd() {
    return _currentReceiverAdd;
  },

  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENTS.ENVELOPE_STORE, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENTS.ENVELOPE_STORE, callback);
  },
  // triggers change listener above, firing controller-view callback
  emitChange() {
    this.emit(Constants.CHANGE_EVENTS.ENVELOPE_STORE);
  },
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
      case Constants.ActionTypes.EDIT:
        _editView(action.receiverAdd);
        break;
      case Constants.ActionTypes.ADD:
        _addView();
        break;
      case Constants.ActionTypes.PRINT:
        _printView(action.receiverAdd);
        break;
      case Constants.ActionTypes.SAVE_ADD:
        _saveAdd(action.receiverAdd);
        break;
      case Constants.ActionTypes.SAVE_EDIT:
        _saveEdit(action.newAdd, action.oldAdd);
        break;


      // add more cases for other actionTypes...

      // no default
    }
  })
});

export default EnvelopeStore;
