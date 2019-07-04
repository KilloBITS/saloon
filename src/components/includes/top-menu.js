import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class TopMenu extends React.Component {
  toCloseMobileMenu(){
      document.getElementById('topMenu').className = 'topMenu';
  }
  toScrollBlock(e){
    let toTopposition = document.getElementById(e.target.getAttribute('get-data')).offsetTop;
    document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: toTopposition - 100, behavior: 'smooth'});
  }
  render() {
    return <div className="topMenu" id="topMenu">
      
      <div className="menuLeft">
        <div className="socials_mini_icon"><a target="_blank" href={"https://vk.com/id203064133"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'vk']} /></a></div>
        <div className="socials_mini_icon"><a target="_blank" href={"https://www.instagram.com/xx_kalinka_malinka_xx/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
        <div className="socials_mini_icon"><a target="_blank" href={"https://www.facebook.com/igor.kalinuk.3"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div>
      </div>
      <div className="content1024">
        <div className="menuBtnTopBlock">
          <div className="menuButton" get-data="ABOUT" onClick={this.toScrollBlock.bind(this)}>О нас</div>
          <div className="menuButton" get-data="PRICE" onClick={this.toScrollBlock.bind(this)}>Услуги</div>
          <div className="menuButton" get-data="STAFF" onClick={this.toScrollBlock.bind(this)}>Персонал</div>
          <div className="menuButton" get-data="GALLERY" onClick={this.toScrollBlock.bind(this)}>Галерея</div>
          <div className="menuButton" get-data="REVIEWS" onClick={this.toScrollBlock.bind(this)}>Отзывы</div>
          <div className="menuButton" get-data="FEEDBACK" onClick={this.toScrollBlock.bind(this)}>Связь</div>
          <div className="searchBlock">
            <FontAwesomeIcon icon={['fas', 'search']} />
          </div>
        </div>
      </div>
      <div className="menuRight">
        <div className="authBtn">Авторизация</div>
        <div className="verticalLine"></div>
        <div className="authBtn">Регистрация</div>
      </div>
      <div className="mobileCloseButton" onClick={this.toCloseMobileMenu.bind(this)}>
        <div className="mobBtnLineDef"></div>
        <div className="mobBtnLineDef"></div>
      </div>
    </div>
  }
}

export default TopMenu;
