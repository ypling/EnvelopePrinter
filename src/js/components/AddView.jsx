import React from 'react';
import Actions from '../actions/EnvelopeActions';

export default React.createClass({
  _saveAddClickHandler(){
    Actions.saveAdd({
      fullName: this.refs.fullName.value,
      line1: this.refs.line1.value,
      line2: this.refs.line2.value,
      city:this.refs.city.value,
      state:this.refs.state.value,
      ZIP:this.refs.ZIP.value,
      country:this.refs.country.value
    });
  },
  render() {
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label"> Full Name:</label>

            <div className="col-sm-10">
              <input type="text" ref="fullName"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Address Line1:</label>

            <div className="col-sm-10">
              <input type="text" ref="line1"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Address Line2:</label>

            <div className="col-sm-10">
              <input type="text" ref="line2"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">City:</label>

            <div className="col-sm-10">
              <input type="text" ref="city"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">State:</label>

            <div className="col-sm-10">
              <input type="text" ref="state"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">ZIP:</label>

            <div className="col-sm-10">
              <input type="text" ref="ZIP"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Country:</label>

            <div className="col-sm-10">
              <input type="text" ref="country"/>
            </div>
          </div>
        </form>
        <button className="btn btn-success" onClick={this._saveAddClickHandler}>
          <span className="glyphicon glyphicon-save"></span>
          Add
        </button>
      </div>
    );
  }
});
