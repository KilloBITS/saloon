import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class TopMenu extends React.Component {
  render() {
    return <div className="topMenu">
      <div className="menuLeft">
        <div className="socials_mini_icon"><a target="_blank" href={"#"}><FontAwesomeIcon icon={['fab', 'vk']} /></a></div>
        <div className="socials_mini_icon"><a target="_blank" href={"#"}><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
        <div className="socials_mini_icon"><a target="_blank" href={"#"}><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div>
      </div>
      <div className="content1024">
        <div className="menuBtnTopBlock">
          <div className="menuButton">О нас</div>
          <div className="menuButton">Услуги</div>
          <div className="menuButton">Персонал</div>
          <div className="menuButton">Галерея</div>
          <div className="menuButton">Отзывы</div>
          <div className="menuButton">Связь</div>
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
    </div>
  }
}

export default TopMenu;
