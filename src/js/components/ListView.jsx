import React from 'react';
import Actions from '../actions/EnvelopeActions';
import ReceiverAdd from './ReceiverAdd.jsx'

export default React.createClass({
  _addClickHandler(){
    Actions.add();
  },
  render() {
    return (
      <div>
        <div>
          <button className="btn btn-success" style={{float:'right'}} onClick={this._addClickHandler}>
            Add new
          </button>
        </div>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {this.props.receiverAdds.map((receiverAdd, index)=>
              <ReceiverAdd receiverAdd={receiverAdd} key={index}/>
          )}
          </tbody>
        </table>
      </div>
    );
  }
});
