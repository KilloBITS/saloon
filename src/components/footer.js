import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Footer extends React.Component {
  toTopThisScroll(){
    document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: 0, behavior: 'smooth'});
  }
  toScrollBlock(e){
    let toTopposition = document.getElementById(e.target.getAttribute('get-data')).offsetTop;
    document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: toTopposition - 100, behavior: 'smooth'});
  }
  render() {
    return <div className="datablock footerBlock">
      <div className="toTopFooter">
        <div className="toTopFooterBtn" onClick={this.toTopThisScroll.bind(this)}>
          <FontAwesomeIcon icon={['fas', 'arrow-up']} />
        </div>
      </div>
      <div className="content1000">
        <div className="footerblockdata dataLeft">
          <div className="footerNavMenuBtn" get-data="ABOUT" onClick={this.toScrollBlock.bind(this)}>О нас</div>
          <div className="footerNavMenuBtn" get-data="PRICE" onClick={this.toScrollBlock.bind(this)}>Услуги</div>
          <div className="footerNavMenuBtn" get-data="STAFF" onClick={this.toScrollBlock.bind(this)}>Персонал</div>
          <div className="footerNavMenuBtn" get-data="GALLERY" onClick={this.toScrollBlock.bind(this)}>Галерея</div>
          <div className="footerNavMenuBtn" get-data="REVIEWS" onClick={this.toScrollBlock.bind(this)}>Отзывы</div>
          <div className="footerNavMenuBtn" get-data="FEEDBACK" onClick={this.toScrollBlock.bind(this)}>Связь</div>
        </div>
        <div className="footerblockdata dataCenter">
          <div className="footerLogotype">
            <img src={'https://i.pinimg.com/originals/05/5c/eb/055cebba54fcd09aa759ebb9c964ec53.png'} alt=""/>
          </div>
          <div className="footerCopiright">
            "Название" (с) 2019, Все права защищены.
          </div>
          <div className="footerAuthor">
            Site created by
            <a href={"http://kaleniuk.top/"} target="_blank" rel="noopener noreferrer">Ihor Kaleniuk</a>
          </div>
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
