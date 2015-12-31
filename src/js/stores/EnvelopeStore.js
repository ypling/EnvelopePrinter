import assign from 'object-assign';
import {EventEmitter} from 'events';
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

// data storage
let _receiverAddrs = [{
  data:{
    fullName:"Chenghui Jin",
    line1:"519 Tumble Grass Ter",
    line2:"",
    city:"Fremont",
    state:"CA",
    ZIP:"94539"
  }
}];
let _senderAddr={data:{
  fullName:"Chenghui Jin",
  line1:"519 Tumble Grass Ter",
  line2:"",
  city:"Fremont",
  state:"CA",
  ZIP:"94539"
}};
let _currentView = Constants.EnvelopePrinterAppViews.LIST;
let _selectedAddr = _receiverAddrs[0];

// add private functions to modify data
function _listView() {
  _currentView = Constants.EnvelopePrinterAppViews.LIST;
  EnvelopeStore.emitChange();
}
function _editView(addr) {
  _currentView = Constants.EnvelopePrinterAppViews.EDIT;
  _selectedAddr = addr;
  EnvelopeStore.emitChange();
}
function _printView(receiverAddr) {
  _currentView = Constants.EnvelopePrinterAppViews.PRINT;
  _selectedAddr = receiverAddr;
  EnvelopeStore.emitChange();
}
function _remove(receiverAddr) {
  _receiverAddrs.splice(_receiverAddrs.indexOf(receiverAddr), 1);
  EnvelopeStore.emitChange();
}

function _save(newAddr, oldAddr) {
  if(oldAddr){
    oldAddr.data = newAddr;
  }else{
    _receiverAddrs.push({data: newAddr});
  }
  _currentView = Constants.EnvelopePrinterAppViews.LIST;
  EnvelopeStore.emitChange();
}
// Facebook style store creation.
const EnvelopeStore = assign({}, EventEmitter.prototype, {
  // public methods used by Controller-View to operate on data
  getReceiverAddrs() {
    return _receiverAddrs;
  },
  getSenderAddr(){
    return _senderAddr;
  },
  getCurrentView() {
    return _currentView;
  },
  getSelectedAddr() {
    return _selectedAddr;
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
        _editView(action.receiverAddr);
        break;
      case Constants.ActionTypes.PRINT:
        _printView(action.receiverAddr);
        break;
      case Constants.ActionTypes.LIST:
        _listView();
        break;
      case Constants.ActionTypes.DELETE:
        _remove(action.receiverAddr);
        break;
      case Constants.ActionTypes.SAVE:
        _save(action.newAddr, action.oldAddr);
        break;

      // add more cases for other actionTypes...
      // no default
    }
  })
});

export default EnvelopeStore;
