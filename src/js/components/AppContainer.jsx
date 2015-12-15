import React from 'react';
import TodoStore from '../stores/TodoStore';
import ActionCreator from '../actions/TodoActionCreators';
import App from './App.jsx';

let _clickPrint;

export default React.createClass({
  _onChange() {
    _clickPrint=this.state.clickPrintAt!==TodoStore.getAll().clickPrintAt;
    this.setState(TodoStore.getAll());
  },
  getInitialState() {
    return TodoStore.getAll();
  },

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  },
  componentDidUpdate(){
    if (_clickPrint) {
      window.print();
    }
  },
  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },

  handleAddTask(e) {
    let title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },

  handleClear(e) {
    ActionCreator.clearList();
  },
  render() {
    let {tasks,targetIndex} = this.state;
    return (
      <App
        className="addressList"
        onAddTask={this.handleAddTask}
        onClear={this.handleClear}
        tasks={tasks}
        targetIndex={targetIndex}/>
    );
  }
});
