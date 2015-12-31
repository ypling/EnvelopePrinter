import React from 'react';
import Actions from '../../actions/EnvelopeActions';
import ReceiverAdd from './ReceiverAddr.jsx'

export default React.createClass({
  _addClickHandler(){
    Actions.edit();
  },
  _editClickHandler(){
    Actions.edit(this.props.senderAddr)
  },
  render() {
    return (
      <div className="container-fluid">
        <div className="row title">
          <div className="col-lg-12">
            <h1 style={{backgroundColor:'gray',color:'white',textAlign:'center'}}>ReceiverAddress Management</h1>
          </div>
        </div>
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
          {this.props.receiverAddrs.map((receiverAddr, index,arr)=>
              <ReceiverAdd receiverAddr={receiverAddr} key={index+arr.length}/>
          )}
          </tbody>
        </table>

        <div className="row title">
          <div className="col-lg-12">
            <h1 style={{backgroundColor:'gray',color:'white',textAlign:'center'}}>SenderAddress Management</h1>
          </div>
        </div>
        <div>
          <button className="btn btn-success" style={{float:'right'}} onClick={this._editClickHandler}>
            Edit
          </button>
        </div>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
          </thead>
          <tbody>
          <tr className="task">
            <td>
              {this.props.senderAddr.data.fullName}
            </td>
            <td>
              {this.props.senderAddr.data.line1 + ', ' + this.props.senderAddr.data.city + ', ' + this.props.senderAddr.data.state}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
});
