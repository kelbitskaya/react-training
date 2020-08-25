import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    };
  }
  /* eslint-disable */
  toggleDropdown() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const { options } = this.props;
    return (
      <div className="dropdown">
        <button
          className={`dropbtn ${(this.state.active ? 'dropbtn__open' : '')}`}
          type="button"
          onClick={() => this.toggleDropdown()}
        >
          {options[this.state.selected]}
        </button>
        <div
          className={`dropdown-content ${(this.state.active ? 'dropdown-content__shown' : '')}`}
        >
          {options.map((item) => (
            <p className="dropdown-content__item">{item}</p>
          ))}
        </div>
      </div>
    );
  }
}
/* eslint-enable */
Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Dropdown;
