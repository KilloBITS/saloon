import React from 'react';
import ReactVivus from 'react-vivus';
const svg = require( '../data/images/logo.svg');

class Preloader extends React.Component {
  closeLoader(){
      document.getElementById('Preloader').className = 'Preloader fadeout';
      setTimeout(() => {
        document.getElementById('Preloader').style.display = 'none'
      }, 400);
  }
  render() {
    return <div className="Preloader" id="Preloader">
      <ReactVivus
          id="foo"
          option={{
            file: svg,
            duration: 300,
            animTimingFunction: 'EASE',
            type: 'oneByOne',
            onReady: console.log
          }}

          callback={this.closeLoader.bind(this)}
        />
    </div>
  }
}

export default Preloader;
