import React from 'react';
import Actions from '../actions/EnvelopeActions';

export default React.createClass({
  _saveAddClickHandler(){
    Actions.saveAdd(this.refs.message.value);
  },
  render() {
    return (
      <div>
        <textarea ref="message" rows="3" cols="30"></textarea>
        <button className="btn " onClick={this._saveAddClickHandler}>
          <span className="glyphicon glyphicon-save"></span>
          Add
        </button>
      </div>
    );
  }
});
