import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class NavBar extends React.Component {
  toTopThisScroll(){
    document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: 0, behavior: 'smooth'});
  }
  render() {
    return <div className="navbar">
      <div className="toTopButton" id="toTopButton" onClick={this.toTopThisScroll.bind(this)}><FontAwesomeIcon icon={['fas', 'arrow-up']} /></div>
    </div>
  }
}

export default NavBar;
