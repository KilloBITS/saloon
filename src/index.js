import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee , fas} from '@fortawesome/free-solid-svg-icons';

import './styles/index.css'
import './styles/index.min.css'

import Preloader from './components/preloader.js';
import TopMenu from './components/includes/top-menu.js';
import NavBar from './components/includes/navbar.js';
import Header from './components/header.js';
import About from './components/about.js';
import StatisticBlock from './components/statistic.js';
import Services from './components/services.js';
import StaffBlock from './components/staff.js';
import GalleryBlock from './components/gallery.js';
import ReviewsBlock from './components/reviews.js';
import Newsletter from './components/newsletter.js'
import FeedBack from './components/feedback.js'
import MapBlock from './components/map.js'
import FooterBlock from './components/footer.js'

//Кабинет
import Cabinet from './components/cabinet/cabinet.js'

library.add(fab, faCheckSquare, faCoffee, fas);

const background = require('./data/images/Depositphotos_3.png');
const background2 = require('./data/images/Depositphotos_2.png');
const logotype = require('./data/images/logotype.png');

const handleScroll = () => {
  const scrollBlock = document.getElementById('scrollBlock');
  let scrolltop = scrollBlock.getElementsByTagName('div')[0].scrollTop;

  if(scrolltop >= 800 ){
    document.getElementById('topMenu').className = 'topMenu scrollMenu';
    document.getElementById('toTopButton').className = 'toTopButton showTopBtn';
    document.getElementById('mobileMenuBtn').className = 'mobileMenuBtn blackBack';
    document.getElementById('navbar').className = 'navbar navbarEnabled';
  }else{
    document.getElementById('topMenu').className = 'topMenu';
    document.getElementById('mobileMenuBtn').className = 'mobileMenuBtn';
    document.getElementById('navbar').className = 'navbar';
  }

  if(scrolltop >= 800 && scrolltop > (scrollBlock.getElementsByTagName('div')[0].scrollHeight - document.getElementById('scrollBlock').offsetHeight - 500) ){
      document.getElementById('toTopButton').className = 'toTopButton';
  }
};

class MainContent extends React.Component {
  componentDidMount () { //ставим фокус в input
    setTimeout(() => {
      document.getElementById('Preloader').className = 'Preloader fadeout';
      setTimeout(() => {
        document.getElementById('Preloader').style.display = 'none'
      }, 300);
    },2500);
  }
  render(){
    return <div className="contentData">
      <Header backgroundData={background} logotype={logotype}/>
      <About/>
      <StatisticBlock/>
      <Services/>
      <StaffBlock/>
      <Newsletter/>
      <GalleryBlock/>
      <ReviewsBlock/>
      <FeedBack/>
      <MapBlock/>
    </div>
  }
}

class CabinetContent extends React.Component {
  render(){
    return <div className="contentData">
      <Cabinet/>
    </div>
  }
}

ReactDOM.render(
  <Scrollbars onScroll={handleScroll} style={{ height: "calc(100%)" }} renderThumbVertical={props => <div className="thumb-vertical"/>} id="scrollBlock" >
    <Preloader/>
    <TopMenu/>
    <NavBar/>
    <Router>
      <div className="routerContent">
        <Route path="/" exact component={MainContent}/>
        <Route path="/profile" exact component={CabinetContent}/>
      </div>
    </Router>
    <FooterBlock/>
  </Scrollbars>,
  document.getElementById('root')
);
