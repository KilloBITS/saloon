import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Cabinet extends React.Component {
  render() {
    return <div className="datablock cabinetBlock">
      <Link to='/'>
        На главную
      </Link>
    </div>
  }
}

export default Cabinet;
