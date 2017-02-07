import React, { Component, PropTypes } from 'react';

export default class Task extends Component {
  render() {
    return (
      <li className="collection-item">{this.props.task.text}</li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isReuired,
};
