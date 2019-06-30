import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StaffBlock extends React.Component {
  render() {
    return <div className="datablock staffBlock">
      <div className="content1024">
        <div className="blockBigTitle" style={{color: 'black'}}>
          <h2>staff</h2>
          Персонал
        </div>
      </div>
      <div className="content1024">
        <div className="staffTable">
          <div className="staffContainer">
            <img src={'https://ld-wp.template-help.com/wordpress_62118/wp-content/uploads/2016/06/person3.jpg'} alt=""/>
            <div className="staffInfoData">
              <div className="staffInfoDataName">Jessica Priston</div>
              <div className="staffInfoDataJob">Aphrodite – owner</div>
              <div className="socialsMiniStaff">
                <div className="socials_mini_icon"><a target="_blank" href={"https://vk.com/id203064133"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'vk']} /></a></div>
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.instagram.com/xx_kalinka_malinka_xx/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.facebook.com/igor.kalinuk.3"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div>
              </div>
            </div>
          </div>
          <div className="staffContainer">
            <img src={'https://ld-wp.template-help.com/wordpress_62118/wp-content/uploads/2016/06/person1.jpg'} alt=""/>
            <div className="staffInfoData">
              <div className="staffInfoDataName">Olivia Grosh</div>
              <div className="staffInfoDataJob">Master Cosmetologist</div>
              <div className="socialsMiniStaff">
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.instagram.com/xx_kalinka_malinka_xx/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.facebook.com/igor.kalinuk.3"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div>
              </div>
            </div>
          </div>
          <div className="staffContainer">
            <img src={'https://ld-wp.template-help.com/wordpress_62118/wp-content/uploads/2016/06/person2.jpg'} alt=""/>
            <div className="staffInfoData">
              <div className="staffInfoDataName">Vanessa Hayes</div>
              <div className="staffInfoDataJob">Massage Therapist</div>
              <div className="socialsMiniStaff">
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.instagram.com/xx_kalinka_malinka_xx/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.facebook.com/igor.kalinuk.3"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div>
              </div>
            </div>
          </div>
          <div className="staffContainer">
            <img src={'https://ld-wp.template-help.com/wordpress_62118/wp-content/uploads/2016/06/person1.jpg'} alt=""/>
            <div className="staffInfoData">
              <div className="staffInfoDataName">Stella Priston</div>
              <div className="staffInfoDataJob">Aphrodite – owner</div>
              <div className="socialsMiniStaff">
                <div className="socials_mini_icon"><a target="_blank" href={"https://vk.com/id203064133"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'vk']} /></a></div>
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.instagram.com/xx_kalinka_malinka_xx/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.facebook.com/igor.kalinuk.3"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div>
              </div>
            </div>
          </div>
          <div className="staffContainer">
            <img src={'https://ld-wp.template-help.com/wordpress_62118/wp-content/uploads/2016/06/person3.jpg'} alt=""/>
            <div className="staffInfoData">
              <div className="staffInfoDataName">Stella Brooks</div>
              <div className="staffInfoDataJob">Master Cosmetologist</div>
              <div className="socialsMiniStaff">
                <div className="socials_mini_icon"><a target="_blank" href={"https://www.instagram.com/xx_kalinka_malinka_xx/"} rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content1024">
        <div className="detailsStaffs">
          <div className="fontAwesomHref"><FontAwesomeIcon icon={['fas', 'quote-right']} /></div>
          <div className=""></div>
          <div className="detailsStaffText">
            В профессии более 15 лет. Обучение в школах Vidal Sasson London, Dessange, Houte Coffure Francaise.
            <br/>
            «Мода выходит из моды. Стиль - никогда...»
          </div>
        </div>
      </div>
    </div>
  }
}

export default StaffBlock;
