import React from 'react';
import Fade from 'react-reveal/Fade';

class FeedBack extends React.Component {
  render() {
    return <div className="datablock feedBackBlock">
      <div className="content1024">
        <Fade top>
        <div className="blockBigTitle" style={{color: 'black'}}>
          <h2>feedback</h2>
          Контакты
        </div>
        </Fade>
      </div>
      <div className="content1024">
        <div className="feedBackData">
          <Fade left>
          <div className="block40feed">
            <div className="contactLine">
              <div className="contactLineTitle">Адесс</div>
              <div className="contactLineData">Львов, ул.Пасечная 1</div>
              <div className="servicesButton microButton">Показать на карте</div>
            </div>

            <div className="contactLine">
              <div className="contactLineTitle">Номер</div>
              <div className="contactLineData">+38(066)55-42-555</div>
              <div className="contactLineData">+38(066)66-42-666</div>
            </div>

            <div className="contactLine">
              <div className="contactLineTitle">Електронная почта</div>
              <div className="contactLineData">beauty_salon@bs.com</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="block60feed">
            <form>
              <div className="formLineData">
                <span>Имя</span>
                <input type="text" className="formTextLine"/>
              </div>

              <div className="formLineData">
                <span>Номер телефона</span>
                <input type="text" className="formTextLine"/>
              </div>

              <div className="formLineData">
                <span>Електронная почта</span>
                <input type="text" className="formTextLine"/>
              </div>

              <div className="formLineData">
                <span>Сообщение</span>
                <textarea className="formTextLine"></textarea>
              </div>

              <div className="formLineData buttonLine">
                <div className="servicesButton sendMessage">Отправить</div>
                <div className="servicesButton clearMessage">Очистить</div>
              </div>
            </form>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  }
}

export default FeedBack;
