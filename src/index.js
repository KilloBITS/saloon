import React from 'react';
import ReactDOM from 'react-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee , fas} from '@fortawesome/free-solid-svg-icons';

import './styles/index.css'

import TopMenu from './components/includes/top-menu.js';
import NavBar from './components/includes/navbar.js';
import Header from './components/header.js';
import About from './components/about.js';
import StatisticBlock from './components/includes/statistic.js';
import Services from './components/services.js';
import StaffBlock from './components/staff.js';
import GalleryBlock from './components/gallery.js';
import ReviewsBlock from './components/reviews.js';
import Newsletter from './components/newsletter.js'
import FeedBack from './components/feedback.js'
import MapBlock from './components/map.js'
import FooterBlock from './components/footer.js'

library.add(fab, faCheckSquare, faCoffee, fas);

const background = require('./data/images/Depositphotos_2.png');
const logotype = require('./data/images/logotype.png');

const handleScroll = () => {
  const scrollBlock = document.getElementById('scrollBlock');
  let scrolltop = scrollBlock.getElementsByTagName('div')[0].scrollTop;
  if(scrolltop >= 800){
    document.getElementById('topMenu').className = 'topMenu scrollMenu';
    document.getElementById('toTopButton').className = 'toTopButton showTopBtn';
  }else{
    document.getElementById('topMenu').className = 'topMenu';
    document.getElementById('toTopButton').className = 'toTopButton';
  }
};

class BodyContent extends React.Component {
  render(){
    return <div className="contentData">
      <TopMenu/>
      <NavBar/>
      <Header background={background} logotype={logotype}/>
      <About/>
      <StatisticBlock/>
      <Services/>
      <StaffBlock/>
      <Newsletter/>
      <GalleryBlock/>
      <ReviewsBlock/>
      <FeedBack/>
      <MapBlock/>
      <FooterBlock/>
    </div>
  }
}

ReactDOM.render(
  <Scrollbars onScroll={handleScroll} style={{ height: "calc(100%)" }} renderThumbVertical={props => <div className="thumb-vertical"/>} id="scrollBlock" >
    <BodyContent/>
  </Scrollbars>,
  document.getElementById('root')
);
