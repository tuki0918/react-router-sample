import React from 'react';
import { Link } from 'react-router'

class Navigation extends React.Component {
  render () {
    return (
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu1">Menu1</Link></li>
          <li><Link to="/menu2">Menu2</Link></li>
          <li><Link to="/menu3">Menu3</Link></li>
        </ul>
      </div>
    )
  }
}

module.exports = Navigation;
