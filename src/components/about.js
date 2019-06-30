import React from 'react';
import Fade from 'react-reveal/Fade';

class AboutBlock extends React.Component {
  render() {
    return <div className="datablock aboutBlock tm_pb_builder">
            <div className="content1024">
              <Fade top>
              <div className="blockBigTitle" style={{color: 'black'}}>
                <h2>about</h2>
                О САЛОНЕ
              </div>
              </Fade>
            </div>
            <div className="content1024" id="#tm_builder_outer_content">
              <div className="aboutSection">
                <div className="container">
                  <div className="rowbox">
                    <div className="rowcolumn">
                      <div className="tm_pb_module tm-waypoint tm_pb_image tm_pb_animation_left tm_pb_image_0 tm_always_center_on_mobile tm-animated">
                        <Fade left>
                        <img src="https://ld-wp.template-help.com/wordpress_64390/wp-content/uploads/2016/10/bg1.png" alt=""/>
                        </Fade>
                      </div>
                    </div>
                    <div className="rowcolumn">
                      <Fade right>
                      <hr className="tm_pb_module tm_pb_space tm_pb_divider_2"/>
                      <div className="tm_pb_text">
                      <p>
                        Хотите подчеркнуть свою красоту и природное очарование?
                        <br/>
                        <br/>
                        Посетите салоны красоты «Название»
                      </p>
                      </div>
                      <hr className="tm_pb_module tm_pb_space tm_pb_divider_3"/>
                      <div className="tm_pb_text_4">
                      <p>
                        Салоны красоты «Название» — это уютные места, где клиенты могут расслабиться и
                        посвятить время уходу за своей внешностью. Вы записались на сложные процедуры
                        по омоложению лица и коррекции тела или просто хотите сделать укладку к предстоящему празднику?
                        Какой бы ни была цель визита, вас всегда будет ждать доброжелательная атмосфера,
                        сервис международного класса и квалифицированные специалисты.
                      </p>
                      </div>
                      <hr className="tm_pb_module tm_pb_space tm_pb_divider_4"/>
                      <div className="tm_pb_text_4">
                      <p>
                        Обратите внимание на наши преимущества:
                        <br/>
                        <br/>
                        <li>скидки, акции и специальные предложения;</li>
                        <li>большой выбор услуг для женщин и мужчин;</li>
                        <li>профессиональная команда;</li>
                        <li>современное оборудование и фирменные средства по уходу за кожей;</li>
                        <li>внимание к каждому посетителю.</li>
                      </p>
                      </div>
                      <hr className="tm_pb_module tm_pb_space tm_pb_divider_4"/>
                      <div className="servicesButton">Детальная информация</div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  }
}

export default AboutBlock;
