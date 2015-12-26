import React from 'react';
import EnvelopeActions from '../actions/EnvelopeActions';

export default React.createClass({

  _editClickHandler(e){
    EnvelopeActions.edit(this.props.receiverAdd)
  },

  _printClickHandler(e){
    EnvelopeActions.print(this.props.receiverAdd);
  },

  render() {
    return (
      <li className="task">
        {this.props.receiverAdd.data}
        <button className="btn" onClick={this._editClickHandler}>
          <span className="glyphicon glyphicon-pencil"></span>
          Edit
        </button>
        <button className="btn" onClick={this._printClickHandler}>
          <span className="glyphicon glyphicon-print"></span>
          Print
        </button>
      </li>
    );
  }
});
