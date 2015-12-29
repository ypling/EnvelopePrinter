import React from 'react';
import Actions from '../../actions/EnvelopeActions';

export default React.createClass({
  _saveEditClickHandler(){
    Actions.saveEdit({
      fullName: this.refs.fullName.value,
      line1: this.refs.line1.value,
      line2: this.refs.line2.value,
      city:this.refs.city.value,
      state:this.refs.state.value,
      ZIP:this.refs.ZIP.value,
      country:this.refs.country.value
    }, this.props.selectedAddr);
  },
  render() {
    let receiverAddr=this.props.selectedAddr.data;
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label"> Full Name:</label>

            <div className="col-sm-10">
              <input type="text" ref="fullName" defaultValue={receiverAddr.fullName}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Address Line1:</label>

            <div className="col-sm-10">
              <input type="text" ref="line1" defaultValue={receiverAddr.line1}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Address Line2:</label>

            <div className="col-sm-10">
              <input type="text" ref="line2" defaultValue={receiverAddr.line2}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">City:</label>

            <div className="col-sm-10">
              <input type="text" ref="city" defaultValue={receiverAddr.city}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">State:</label>

            <div className="col-sm-10">
              <input type="text" ref="state" defaultValue={receiverAddr.state}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">ZIP:</label>

            <div className="col-sm-10">
              <input type="text" ref="ZIP" defaultValue={receiverAddr.ZIP}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Country:</label>

            <div className="col-sm-10">
              <input type="text" ref="country" defaultValue={receiverAddr.country}/>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-success" onClick={this._saveEditClickHandler}>
              <span className="glyphicon glyphicon-save"></span>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }
});
