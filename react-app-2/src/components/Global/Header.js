import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import logo from './image/logo.svg';
import './css/styles.css';

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    }
  render() {
      const {title, items} = this.props;
    return (
        <div className="Header">
          <img src={logo} className="Logo" alt="logo" />
          <h2>{title}</h2>

          <ul className="Menu">
            {items && items.map((item, key) => <li className="d-inline mr-5" key={key}>{item.title}</li>)}
          </ul>

        </div>
    );
  }
}

export default Header;
