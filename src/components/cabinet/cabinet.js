import React from 'react';
import { Link } from 'react-router-dom';
class Cabinet extends React.Component {
  componentDidMount () { //ставим фокус в input
    setTimeout(() => {
      document.getElementById('Preloader').className = 'Preloader fadeout';
      setTimeout(() => {
        document.getElementById('Preloader').style.display = 'none'
      }, 300);
    },2500);
  }
  render() {
    return <div className="datablock cabinetBlock">
      <Link to='/'>
        На главную
      </Link>
    </div>
  }
}

export default Cabinet;
