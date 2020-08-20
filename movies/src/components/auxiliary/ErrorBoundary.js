import React from 'react';
import PropTypes from 'prop-types';

function ErrorBoundary(props) {
  const OoopsText = () => (
    <h2>
      Ooops, something went wrong...
    </h2>
  );

  const isEverythingOK = true;
  /* eslint-disable */
  return (
    <>
      { isEverythingOK ? props.children : <OoopsText />}
    </>
  );
  /* eslint-enable */
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
