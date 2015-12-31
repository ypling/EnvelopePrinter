import React from 'react';
import Actions from '../../actions/EnvelopeActions';

export default React.createClass({
  _saveClickHandler(){
    Actions.save({
      "fullName": this.refs.fullName.value,
      "line1": this.refs.line1.value,
      "line2": this.refs.line2.value,
      "city": this.refs.city.value,
      "state": this.refs.state.value,
      "ZIP": this.refs.ZIP.value,
      "country": this.refs.country.value
    }, this.props.selectedAddr);
  },
  _cancelClickHandler(){
    Actions.list();
  },
  render() {
    let title = this.props.selectedAddr ? "SaveChange" : "Add";
    let addr = this.props.selectedAddr ? this.props.selectedAddr.data : {};
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label"> Full Name:</label>

            <div className="col-sm-10">
              <input type="text" ref="fullName" defaultValue={addr.fullName}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Address Line1:</label>

            <div className="col-sm-10">
              <input type="text" ref="line1" defaultValue={addr.line1}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Address Line2:</label>

            <div className="col-sm-10">
              <input type="text" ref="line2" defaultValue={addr.line2}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">City:</label>

            <div className="col-sm-10">
              <input type="text" ref="city" defaultValue={addr.city}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">State:</label>

            <div className="col-sm-10">
              <input type="text" ref="state" defaultValue={addr.state}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">ZIP:</label>

            <div className="col-sm-10">
              <input type="text" ref="ZIP" defaultValue={addr.ZIP}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Country:</label>

            <div className="col-sm-10">
              <input type="text" ref="country" defaultValue={addr.country}/>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-success" onClick={this._saveClickHandler}>
              <span className="glyphicon glyphicon-save"></span> {title}
            </button> <button className="btn btn-success" onClick={this._cancelClickHandler}>
              <span className="glyphicon glyphicon-save"></span> Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
});
