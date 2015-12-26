import React from 'react';
import Actions from '../actions/EnvelopeActions';

export default React.createClass({
  _saveEditClickHandler(){
    Actions.saveEdit(this.refs.input.value, this.props.receiverAdd);
  },
  render() {
    return (
      <div>
        <textarea type="text" ref="input" defaultValue={this.props.receiverAdd.data}>
        </textarea>
        <button claseName="btn" onClick={this._saveEditClickHandler}>
          <span class="glyphicon glyphicon-save"></span>
          Save
        </button>
      </div>
    );
  }
});
