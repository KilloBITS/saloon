import React from 'react';
import Zoom from 'react-reveal/Zoom';

class NewsLetter extends React.Component {
  render() {
    return <div className="datablock newsletterBlock">
      <div className="content1024">
        <div className="newsletterdata">
          <div className="newsletterTitle">
          <Zoom cascade>
          Хочешь всегда быть первым вкурсе событий ?
          </Zoom>
          </div>
          <div className="newsletterEmail">
            <input type="email" className="emailarea" placeholder="Введите вашу почту"/>
            <input type="button" className="emailbtn" value="отправить"/>
          </div>
        </div>
      </div>
    </div>
  }
}

export default NewsLetter;
