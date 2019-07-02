import React from 'react';
import { Link } from 'react-router-dom';
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
