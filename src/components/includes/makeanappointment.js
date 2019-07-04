import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MakeAnAppointment extends React.Component {
  constructor() {
    super();
    this.state = {
      moment: 1
    };
  }

  handleChange = (moment) => {

  }

  render() {
    return <div className={(this.props.opened)?"makeanappointment":"makeanappointment hiden"} id="makeanappointment">
      <div className="makeanappointmentContent">
        <div className="makeanappointmentHeader">
          <div className="makeanappointmentHeaderTitle">Записатся на прием</div>
          <div className="makeanappointmentHeaderClose" onClick={this.props.closedModalMethods}><FontAwesomeIcon icon={['fas', 'times']} /></div>
        </div>
        <div className="makeanappointmentData">
          <div className="makeanappointmentDataLine">
            <span>Ваше Имя</span>
            <input type="text" className="makeanappointmentInput"/>
          </div>
          <div className="makeanappointmentDataLine">
            <span>Номер телефона</span>
            <input type="text" className="makeanappointmentInput"/>
          </div>
          <div className="makeanappointmentDataLine">
            <span>Дата / Время</span>
            <input type="datetime-local" className="makeanappointmentInput"/>
          </div>
          <div className="makeanappointmentDataLine">
            <input type="button" className="makeanappointmentInput servicesButton" value="Записатся"/>
          </div>
        </div>
      </div>
    </div>
  }
}

export default MakeAnAppointment;
