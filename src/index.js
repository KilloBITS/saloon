import React from 'react';
import ReactDOM from 'react-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faHome , fas} from '@fortawesome/free-solid-svg-icons';

import './styles/index.css'

import TopMenu from './components/includes/top-menu.js';
import NavBar from './components/includes/navbar.js';
import Header from './components/header.js';
import About from './components/about.js';
import StatisticBlock from './components/includes/statistic.js';
import Services from './components/services.js';


library.add(fab, faCheckSquare, faCoffee, fas);

const background = require('./data/images/Depositphotos_2.png');
const logotype = require('./data/images/logotype.png');

class BodyContent extends React.Component {
  render(){
    return <div className="contentData">
      <TopMenu/>
      <NavBar/>
      <Header background={background} logotype={logotype}/>
      <About/>
      <StatisticBlock/>
      <Services/>
    </div>
  }
}

ReactDOM.render(
  <Scrollbars style={{ height: "calc(100%)" }} renderThumbVertical={props => <div className="thumb-vertical"/>} id="scrollBlock" >
    <BodyContent/>
  </Scrollbars>,
  document.getElementById('root')
);
