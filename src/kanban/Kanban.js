import React, { Component } from 'react';
import TasksPage from './kanbanComponents/TasksPage';
import { connect } from 'react-redux';  // Adds connect to the list of imports
import './kanbanStyle.css';
import { createTask, editTask, removeTask, fetchTasks } from './kanbanactions';

export class Kanban extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTasks());  // Dispatches the fetchTasks action from componentDidMount
  }

  // Handler for dispatching a CREATE_TASK action
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  }

  onStatusChange = (id, task, status) => {
   this.props.dispatch(editTask(id, task, { status }));       // Creates the onStatusChange handler, which dispatches the editTask action creator
  }

  onRemoveTask = (task) => {
   this.props.dispatch(removeTask(task));
  }

  // The onCreateTask handler is passed to TasksPage as a simple callback prop
  render() {
    return (
      <div className="main-content">
        <TasksPage tasks={this.props.tasks} onCreateTask={this.onCreateTask} onStatusChange={this.onStatusChange} onRemoveTask={this.onRemoveTask}/>
      </div>
    );
  }
}

function mapStateToProps(state) {     // The state argument is the entire contents of the Redux store, specifically the result of calling getState on the store instance
  return {
    tasks: state.tasks    // The return value of mapStateToProps is passed into the App component as props, which is why render can reference this.props.tasks
  }
}

// passing actions which will ensure the search function is injected as a component props
export default connect( mapStateToProps )(Kanban);
