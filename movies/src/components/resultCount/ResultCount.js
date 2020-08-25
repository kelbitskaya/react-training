import React from 'react';
import PropTypes from 'prop-types';

export default function ResultCount(props) {
  const { count } = props;
  return (
    <div className="result-count">
      <strong>{count}</strong>
      <span className="result-count__text"> movies founded</span>
    </div>
  );
}

ResultCount.propTypes = {
  count: PropTypes.number.isRequired,
};
