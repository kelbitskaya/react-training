import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    const { children } = this.props;
    const { errorInfo } = this.state;
    if (errorInfo) {
      return (
        <h2>Something went wrong.</h2>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

/* eslint-enable */
