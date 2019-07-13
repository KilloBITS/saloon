import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const bg = require('../data/images/bg2.png')
class StatisticBlock extends React.Component {
  toScrollComments(e){
    let toTopposition = document.getElementById('REVIEWS').offsetTop;
    document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: toTopposition, behavior: 'smooth'});
  }
  render() {
    return <div className="datablock statisticBlock">
      <div className="content1024">
        <div className="statistic_background">
          <img src={bg} alt=""/>
        </div>
        <div className="statistic_block">
          <Fade bottom>
          <div className="statisticDate">
            <div className="statisticIcon">
              <FontAwesomeIcon icon={['fas', 'clock']} />
            </div>
            <div className="statisticText">
              Время работы
              <br/>
              <br/>
              С понедельника по Пятницу
              <br/>
              <b>с 09:00 - 20:00</b>
              <br/>
              <br/>
              Суббота
              <br/>
              <b>с 10:00 - 18:00</b>
              <br/>
              <br/>
              Воскресенье
              <br/>
              <b>Выходной</b>
            </div>
          </div>
          </Fade>
          <Fade bottom>
          <div className="statisticDate">
            <div className="statisticIcon">
              <FontAwesomeIcon icon={['fas', 'users']} />
            </div>
            <div className="statisticText">
              Только в нашем салоне более
              <br/>
              <b>1000</b>
              <br/>
              довольных клиентов, которыми занимаются
              только лючшие профессионалы.
              <br/>
              <br/>
              Нам важно ваше мнение, и ваша внешность!
              <div className="servicesButton" onClick={this.toScrollComments.bind(this)}>Посмотреть отзывы</div>
            </div>
          </div>
          </Fade>
          <Fade bottom>
          <div className="statisticDate">
            <div className="statisticIcon">
              <FontAwesomeIcon icon={['fas', 'user-edit']} />
            </div>
            <div className="statisticText">
              Хороший сервис это когда вы сами выбираете время.
              <br/>
              <br/>
              У нас вы можете сами выбрать время которое вам удобно,
              <br/>
              а так же выбрать специалиста который будет вас обслуживать
              <div className="servicesButton" onClick={this.props.openedModalMethods}>Записатся на прием</div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  }
}

export default StatisticBlock;
