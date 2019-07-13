import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class NavBar extends React.Component {
  toTopThisScroll(){
    document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: 0, behavior: 'smooth'});
  }
  toOpenMobileMenu(){
      document.getElementById('topMenu').className = 'topMenu openMenu';
  }
  render() {
    return <div className="navbar" id="navbar">
      <img src={this.props.logo} alt="" className="mobileMenuLogo"/>
      <div className="mobileMenuBtn" id="mobileMenuBtn" onClick={this.toOpenMobileMenu.bind(this)}>
        <div className="mobBtnLineDef"></div>
        <div className="mobBtnLineDef"></div>
        <div className="mobBtnLineDef"></div>
      </div>
      <div className="toTopButton" id="toTopButton" onClick={this.toTopThisScroll.bind(this)}><FontAwesomeIcon icon={['fas', 'arrow-up']} /></div>
    </div>
  }
}

export default NavBar;
