import React from 'react';
import Fade from 'react-reveal/Fade';
import Swiper from 'react-id-swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const multipleRowSlidesLayoutMobile = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.serviceBtn.nextService',
      prevEl: '.serviceBtn.prevService'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  return (
    <Swiper {...params}>
      <div className="servicesData">
        <div className="serviceIcon" style={{backgroundPosition: '-200px 0px'}}></div>
        <div className="serviceTitle">Уход за ногтями</div>
        <div className="servicePodTitle">(Маникьюр / Педикюр)</div>
        <div className="serviceText">
          Хотя уход за руками и ногтями обычно ограничивается несколькими услугами,
          у нас есть широкий выбор различных методов педикюра,
          а также общие процедуры по уходу за кожей рук…
          <br/>
          <br/>
          Обычно это ограничивается использованием методов ухода за кожей.
          <br/>
          <br/>
          Вот список услуг:
          <li>Регулярный Маникюр</li>
          <li>Спа Маникюр</li>
        </div>
        <div className="servicesButton">Детальнее</div>
      </div>
      <div className="servicesData serviceCenter">
        <div className="serviceIcon" style={{backgroundPosition: '0px -465px'}}></div>
        <div className="serviceTitle">Уход за волосами</div>
        <div className="servicePodTitle">(Стрижка / покраска)</div>
        <div className="serviceText">
          Хотя уход за руками и ногтями обычно ограничивается несколькими услугами,
          у нас есть широкий выбор различных методов педикюра,
          а также общие процедуры по уходу за кожей рук…
          <br/>
          <br/>
          Обычно это ограничивается использованием методов ухода за кожей.
          <br/>
          <br/>
          Вот список услуг:
          <li>Регулярный Маникюр</li>
          <li>Спа Маникюр</li>
        </div>
        <div className="servicesButton">Детальнее</div>
      </div>
      <div className="servicesData">
        <div className="serviceIcon" style={{backgroundPosition: '-200px -464px'}}></div>
        <div className="serviceTitle">Уход за телом</div>
        <div className="servicePodTitle">(Массаж / Маски)</div>
        <div className="serviceText">
          Хотя уход за руками и ногтями обычно ограничивается несколькими услугами,
          у нас есть широкий выбор различных методов педикюра,
          а также общие процедуры по уходу за кожей рук…
          <br/>
          <br/>
          Обычно это ограничивается использованием методов ухода за кожей.
          <br/>
          <br/>
          Вот список услуг:
          <li>Регулярный Маникюр</li>
          <li>Спа Маникюр</li>
        </div>
        <div className="servicesButton">Детальнее</div>
      </div>
      <div className="servicesData">
        <div className="serviceIcon" style={{backgroundPosition: '-200px -464px'}}></div>
        <div className="serviceTitle">Уход за телом</div>
        <div className="servicePodTitle">(Массаж / Маски)</div>
        <div className="serviceText">
          Хотя уход за руками и ногтями обычно ограничивается несколькими услугами,
          у нас есть широкий выбор различных методов педикюра,
          а также общие процедуры по уходу за кожей рук…
          <br/>
          <br/>
          Обычно это ограничивается использованием методов ухода за кожей.
          <br/>
          <br/>
          Вот список услуг:
          <li>Регулярный Маникюр</li>
          <li>Спа Маникюр</li>
        </div>
        <div className="servicesButton">Детальнее</div>
      </div>
      <div className="servicesData">
        <div className="serviceIcon" style={{backgroundPosition: '-200px -464px'}}></div>
        <div className="serviceTitle">Уход за телом</div>
        <div className="servicePodTitle">(Массаж / Маски)</div>
        <div className="serviceText">
          Хотя уход за руками и ногтями обычно ограничивается несколькими услугами,
          у нас есть широкий выбор различных методов педикюра,
          а также общие процедуры по уходу за кожей рук…
          <br/>
          <br/>
          Обычно это ограничивается использованием методов ухода за кожей.
          <br/>
          <br/>
          Вот список услуг:
          <li>Регулярный Маникюр</li>
          <li>Спа Маникюр</li>
        </div>
        <div className="servicesButton">Детальнее</div>
      </div>
    </Swiper>
  )
};

class ServicesBlock extends React.Component {
  render() {
    return <div className="datablock servicesBlock" id="PRICE">
      <div className="content1024">
        <Fade>
        <div className="blockBigTitle" style={{color: 'black'}}>
          <h2>pricing</h2>
          УСЛУГИ
        </div>
        </Fade>
      </div>
      <div className="content1024">
        <div className="servicesTable">
          {multipleRowSlidesLayoutMobile()}
        </div>
      </div>
    </div>
  }
}

export default ServicesBlock;
