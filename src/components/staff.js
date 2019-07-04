import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StaffBlock extends React.Component {
  render() {
    return <div className="datablock staffBlock" id="STAFF">
      <div className="content1024">
        <Fade>
        <div className="blockBigTitle" style={{color: 'black'}}>
          <h2>staff</h2>
          Персонал
        </div>
        </Fade>
      </div>
      <div className="content1024">
        <div className="staffTable">
          <Fade>
          <div className="staffContainer">
            <img src={'http://templatevisual.com/demo/largeria/barberia/upload/mini_gallery_04.jpg'} alt=""/>
            <div className="staffInfoData">
              <div className="staffInfoDataName">Игорь</div>
              <div className="staffInfoDataJob">Стилист - парикмахер</div>
              <div className="socialsMiniStaff">
                <div className="socials_mini_icon"><a target="_blank" href={"https://vk.com/id203064133"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'vk']} /></a></div>
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.instagram.com/xx_kalinka_malinka_xx/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.facebook.com/igor.kalinuk.3"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div>
              </div>
            </div>
          </div>
          </Fade>
          <Fade>
          <div className="staffContainer">
            <img src={'https://ld-wp.template-help.com/wordpress_62118/wp-content/uploads/2016/06/person1.jpg'} alt=""/>
            <div className="staffInfoData">
              <div className="staffInfoDataName">Ольга</div>
              <div className="staffInfoDataJob">Мастер маникьюра</div>
              <div className="socialsMiniStaff">
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.instagram.com/xx_kalinka_malinka_xx/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.facebook.com/igor.kalinuk.3"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div>
              </div>
            </div>
          </div>
          </Fade>
          <Fade>
          <div className="staffContainer">
            <img src={'https://ld-wp.template-help.com/wordpress_62118/wp-content/uploads/2016/06/person2.jpg'} alt=""/>
            <div className="staffInfoData">
              <div className="staffInfoDataName">Ангелина</div>
              <div className="staffInfoDataJob">Массажист</div>
              <div className="socialsMiniStaff">
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.instagram.com/xx_kalinka_malinka_xx/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.facebook.com/igor.kalinuk.3"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div>
              </div>
            </div>
          </div>
          </Fade>
          <Fade>
          <div className="staffContainer">
            <img src={'http://templatevisual.com/demo/largeria/barberia/upload/mini_gallery_05.jpg'} alt=""/>
            <div className="staffInfoData">
              <div className="staffInfoDataName">Владимир</div>
              <div className="staffInfoDataJob">Массажист</div>
              <div className="socialsMiniStaff">
                <div className="socials_mini_icon"><a target="_blank" href={"https://vk.com/id203064133"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'vk']} /></a></div>
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.instagram.com/xx_kalinka_malinka_xx/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.facebook.com/igor.kalinuk.3"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div>
              </div>
            </div>
          </div>
          </Fade>
          <Fade>
          <div className="staffContainer">
            <img src={'https://ld-wp.template-help.com/wordpress_62118/wp-content/uploads/2016/06/person3.jpg'} alt=""/>
            <div className="staffInfoData">
              <div className="staffInfoDataName">Элеонора</div>
              <div className="staffInfoDataJob">Мастер косметолог</div>
              <div className="socialsMiniStaff">
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.instagram.com/xx_kalinka_malinka_xx/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
      <div className="content1024">
        <div className="detailsStaffs">
          <div className="fontAwesomHref"><FontAwesomeIcon icon={['fas', 'quote-right']} /></div>
          <div className=""></div>
          <div className="detailsStaffText">
          <Zoom cascade>
            В профессии более 15 лет. Обучение в школах Vidal Sasson London, Dessange, Houte Coffure Francaise.
            <br/>
            «Мода выходит из моды. Стиль - никогда...»
          </Zoom>
          </div>
        </div>
      </div>
    </div>
  }
}

export default StaffBlock;
