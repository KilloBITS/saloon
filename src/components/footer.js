import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Footer extends React.Component {
  render() {
    return <div className="datablock footerBlock">
      <div className="content1000">
        <div className="footerblockdata dataLeft">
          <div className="footerNavMenuBtn">О нас</div>
          <div className="footerNavMenuBtn">Услуги</div>
          <div className="footerNavMenuBtn">Персонал</div>
          <div className="footerNavMenuBtn">Галерея</div>
          <div className="footerNavMenuBtn">Отзывы</div>
          <div className="footerNavMenuBtn">Связь</div>
        </div>
        <div className="footerblockdata dataCenter">
          <div className="footerLogotype">
            <img src={'https://i.pinimg.com/originals/05/5c/eb/055cebba54fcd09aa759ebb9c964ec53.png'} alt=""/>
          </div>
          <div className="footerCopiright">
            "Название" (с) 2019, Все права защищены.
          </div>
          <div className="footerAuthor">Site created by Ihor Kaleniuk</div>
        </div>
        <div className="footerblockdata dataRight">
          <div className="footerNavMenuBtn">Правила</div>
          <div className="footerNavMenuBtn">Условия пользования</div>
          <div className="footerNavMenuBtn">Политика конфиденциальности</div>
          <div className="footerNavMenuBtnSocials">
            <div className="socials_mini_icon"><a target="_blank" href={"https://vk.com/id203064133"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'vk']} /></a></div>
            <div className="socials_mini_icon"><a target="_blank" href={"https://www.instagram.com/xx_kalinka_malinka_xx/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
            <div className="socials_mini_icon"><a target="_blank" href={"https://www.facebook.com/igor.kalinuk.3"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Footer;
