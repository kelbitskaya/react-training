import React from 'react';

const text = 'Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum curabitur vitae nunc sed. ';

class BoldText extends React.PureComponent {
  render() {
    return <strong>{text}</strong>;
  }
}

export default BoldText;
