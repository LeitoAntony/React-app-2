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
      console.log(this.props);
    return (
        <div className="Header">
          <img src={logo} className="Logo" alt="logo" />
        </div>
    );
  }
}

export default Header;
