import React, { Component, PropTypes } from 'react';

import { Tasks } from '../api/tasks.js';

export default class Task extends Component {
  toggleChecked() {
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked },
    });
  }

  deleteTask() {
    Tasks.remove(this.props.task._id);
  }

  render() {
    const taskClassName = this.props.task.checked ? 'collection-item checked' : 'collection-item';

    return (
      <li className={taskClassName}>
        <input
          type="checkbox"
          checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
          id={this.props.task._id}
        />

      <label htmlFor={this.props.task._id}>{this.props.task.text} <i>({this.props.task.username})</i></label>

        <i className="material-icons delete right" onClick={this.deleteTask.bind(this)}>remove_circle_outline</i>
      </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};
