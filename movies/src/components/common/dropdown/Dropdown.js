import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    };
  }

  toggleDropdown() {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  }

  handleClick(index) {
    this.setState({
      selected: index,
      active: false,
    });
  }

  renderOptions() {
    const { options } = this.props;
    return options.map((item, index) => (
      <li
        role="presentation"
        className="dropdown-content__item"
        key={item.id}
        onClick={() => this.handleClick(index)}
        onKeyDown={() => this.handleClick(index)}
        type="button"
      >
        {item}
      </li>
    ));
  }

  render() {
    const { options } = this.props;
    const { active, selected } = this.state;
    return (
      <div className="dropdown">
        <button
          className={`dropbtn ${(active ? 'dropbtn__open' : '')}`}
          type="button"
          onClick={() => this.toggleDropdown()}
        >
          {options[selected]}
        </button>
        <ul
          className={`dropdown-content ${(active ? 'dropdown-content__shown' : '')}`}
        >
          { this.renderOptions() }
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Dropdown;
