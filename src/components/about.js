import React from 'react';
const saloon = require('../data/images/cover1.jpg')
class AboutBlock extends React.Component {
  render() {
    return <div className="datablock aboutBlock tm_pb_builder">
            <div className="content1024">
              <div className="blockBigTitle" style={{color: 'black'}}>О САЛОНЕ</div>
            </div>
            <div className="content1024" id="#tm_builder_outer_content">
              <div className="aboutSection">
                <div className="container">
                  <div className="rowbox">
                    <div className="rowcolumn">
                      <div className="tm_pb_module tm-waypoint tm_pb_image tm_pb_animation_left tm_pb_image_0 tm_always_center_on_mobile tm-animated">
                        <img src="https://ld-wp.template-help.com/wordpress_64390/wp-content/uploads/2016/10/bg1.png" alt=""/>
                      </div>
                    </div>
                    <div className="rowcolumn">
                      <hr className="tm_pb_module tm_pb_space tm_pb_divider_2"/>
                      <div className="tm_pb_text">
                      <p>
                        “Текст... Текст... Текст... Текст... Текст... м Текст... Текст... м м м Текст... м Текст... мТекст... м
                        Текст...мТекст...Текст...Текст...Текст... мТекст... Текст...м ммм Текст...Текст...Текст...!”
                      </p>
                      </div>
                      <hr className="tm_pb_module tm_pb_space tm_pb_divider_3"/>
                      <div className="tm_pb_text_4">
                      <p>
                        Мастера салона ”АESTHETIC STYLE SALON”, влюбленные в свое дело, поэтому постоянно повышают квалификацию на престижных семинарах, мастер-классах, проводимых профессиональными стилистами в Украине и за рубежом.
                        Имея за плечами многолетний опыт, любой из мастеров подберет уникальный имидж, который наиболее выгодно подчеркнет Ваши прелести.
                        Используем косметику, зарекомендовала себя на мировом рынке. Все специалисты и мастера нашего салона работают на косметике элитных марок: Alterna, Kydra, Joico, Secret Professional, La Ric, Leighton Denny, Decleor, Pharmaskincare, HydroPeptide, Heliabrine.
                        Успешно пройдя клинические исследования, вся продукция была одобрена экспертами мирового уровня.
                      </p>
                      </div>
                      <hr className="tm_pb_module tm_pb_space tm_pb_divider_4"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  }
}

export default AboutBlock;
