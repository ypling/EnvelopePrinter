import React from 'react';
import EnvelopeActions from '../actions/EnvelopeActions';

export default React.createClass({

  _editClickHandler(e){
    EnvelopeActions.edit(this.props.receiverAdd)
  },

  _printClickHandler(e){
    EnvelopeActions.print(this.props.receiverAdd);
  },
  _deleteClickHandler(e){
    EnvelopeActions.remove(this.props.receiverAdd);
  },

  render() {
    let receiverAdd=this.props.receiverAdd.data;
    return (
      <tr className="task">
        <td>
          {receiverAdd.fullName}
        </td>
        <td>
          {receiverAdd.line1+', '+receiverAdd.city+', '+receiverAdd.state}
        </td>
        <td>
          <button className="btn" onClick={this._editClickHandler}>
            <span className="glyphicon glyphicon-pencil"></span>
            Edit
          </button>
        </td>
        <td>
          <button className="btn" onClick={this._printClickHandler}>
            <span className="glyphicon glyphicon-print"></span>
            Print
          </button>
        </td>
        <td>
          <button className="btn" onClick={this._deleteClickHandler}>
            <span className="glyphicon glyphicon-remove"></span>
            Delete
          </button>
        </td>
      </tr>
    );
  }
});
