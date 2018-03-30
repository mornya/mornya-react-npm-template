import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends Component {
  render() {
    return `Hello ${this.props.name}`;
  }
}

MyComponent.propTypes = {
  name: PropTypes.string,
};

MyComponent.defaultProps = {
  name: 'World',
};
