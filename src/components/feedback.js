import React from 'react';
import Fade from 'react-reveal/Fade';

class FeedBack extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      number: '',
      email: '',
      text: ''
    }
  }
  clearArea(){
    this.setState({
      name: '',
      number: '',
      email: '',
      text: ''
    })
  }
  updateMessageDataName(event){
    var name = event.target.value;
    this.setState({
        name: name
    });
  }
  updateMessageDataNumber(event){
    var number = event.target.value;
    this.setState({
        number: number
    });
  }
  updateMessageDataEmail(event){
    var email = event.target.value;
    this.setState({
        email: email
    });
  }
  updateMessageDataText(event){
    var text = event.target.value;
    this.setState({
        text: text
    });
  }
  render() {
    return <div className="datablock feedBackBlock" id="FEEDBACK">
      <div className="content1024">
        <Fade>
        <div className="blockBigTitle" style={{color: 'black'}}>
          <h2>feedback</h2>
          Контакты
        </div>
        </Fade>
      </div>
      <div className="content1024">
        <div className="feedBackData">
          <Fade>
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
          <Fade>
          <div className="block60feed">
            <form>
              <div className="formLineData">
                <label>Имя</label>
                <input type="text" className="formTextLine" value={this.state.name} onChange={this.updateMessageDataName.bind(this)}/>
              </div>

              <div className="formLineData">
                <label>Номер телефона</label>
                <input type="text" className="formTextLine" value={this.state.number} onChange={this.updateMessageDataNumber.bind(this)}/>
              </div>

              <div className="formLineData">
                <label>Електронная почта</label>
                <input type="text" className="formTextLine" value={this.state.email} onChange={this.updateMessageDataEmail.bind(this)}/>
              </div>

              <div className="formLineData">
                <label>Сообщение</label>
                <textarea className="formTextLine" value={this.state.text} onChange={this.updateMessageDataText.bind(this)}></textarea>
              </div>

              <div className="formLineData buttonLine">
                <div className="servicesButton sendMessage">Отправить</div>
                <div className="servicesButton clearMessage" onClick={this.clearArea.bind(this)}>Очистить</div>
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
