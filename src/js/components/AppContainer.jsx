import React from 'react';
import EnvelopePrinterCV from './EnvelopePrinterCV.jsx';
import Apps from './Apps.jsx';
import { Router, Route } from 'react-router'

export default React.createClass({
  render() {
    return (
      <Router>
        <Route path="/" component={Apps} />
        <Route path="/envelopePrinter" component={EnvelopePrinterCV}/>
      </Router>
    );
  }
});
