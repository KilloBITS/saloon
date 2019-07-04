import React from 'react';
import Lottie from 'react-lottie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const background2 = require('../data/images/87e37abb-0ed8-4350-8e79-14a29b319296.jpg');
class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
              {
                eachSlide: 'url('+background2+')',
              }
            ],
            autoplay: true,
            active: 0,
            max: 0
        };
        this.state.max = this.state.slides.length;
        this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
    }
    componentDidMount() {
        this.interval = setInterval( () => this.intervalBetweenSlides(), 10000);
    }
    componentWillUnmount() {
        clearInterval( this.interval );
    }
    intervalBetweenSlides() {
        if (this.state.autoplay === true) {
            if (this.state.active === this.state.max - 1) {
                this.setState({
                    active: 0
                });
            } else {
                this.setState({
                    active: this.state.active+1
                });
            }
            this.setState({
                active: this.state.active
            });
        }
    }
    toggleAutoPlay(){
        this.setState({
            autoplay: !this.state.autoplay
        });
    }
    nextOne(){
        if (this.state.active < this.state.max - 1) {
            this.setState({
                active: this.state.active + 1
            });
        }
    }
    prevOne(){
        if (this.state.active > 0) {
            this.setState({
                active: this.state.active - 1
            });
        }
    }
    dots(index, event){
        this.setState({
            active: index
        });
    }
    isActive(value){
        if(this.state.active === value){
            return 'active';
        }
    }
    setSliderStyles(){
        const transition = this.state.active * - 100;
        return {
          width: ( this.state.slides.length * 100 ) + 'vw',
          transform: 'translateX(' + transition + 'vw)'
        }
    }
    renderSlides() {
        return this.state.slides.map( (item, index) => (
          <div className='each-slide' key={ index } style={{ backgroundImage: item.eachSlide }}>
            <div className="bigLogotype" id="bigLogotype">
              <img src={this.props.logo} alt=""/>
              <div className="headerInfoText">
                «Настоящее волшебство» - вот как описывают клиенты работу профессионала.
                <br/>
                Удивительно, как изменения внешности способны повлиять на жизнь человека!
              </div>
            </div>
          </div>
        )
      );
    }
    renderDots() {
      return this.state.slides.map( (item, index) => (
          <div className={this.isActive(index) + ' dots' } key={ index } ref='dots'
          onClick={ this.dots.bind(this, index) } ></div>
        )
      );
    }
    renderPlayStop() {
        let playStop;
        if(this.state.autoplay){
            playStop =  <FontAwesomeIcon icon={['fas', 'pause']} />
        }else {
            playStop = <FontAwesomeIcon icon={['fas', 'play']} />
        }
        return playStop;
    }
    renderArrows() {
        if(this.state.slides.length > 1){
          return (
              <div className="arrowsPrewAnfNext">
                  <button
                  type='button'
                  className='arrows prev'
                  onClick={ this.prevOne.bind(this) } >
                      <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                          <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                          <path d='M0 0h24v24H0z' fill='none'/>
                      </svg>
                  </button>
                  <button
                  type='button'
                  className='arrows next'
                  onClick={this.nextOne.bind(this)} >
                      <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
                          <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                          <path d='M0 0h24v24H0z' fill='none'/>
                      </svg>
                  </button>
              </div>
          );
        }else{
          return ('');
        }

    }
    render(){

        return (
            <div>
                <div className='slider'>
                    <div className='wrapper' style={ this.setSliderStyles() }>
                      <div className="backgroundFilter"></div>
                      { this.renderSlides() }
                    </div>
                    { this.renderArrows() }
                    <ul className='dots-container'>
                        { (this.state.slides.length > 1)?this.renderDots():"" }
                    </ul>
                    <i className='toggle-play' onClick={ this.toggleAutoPlay.bind(this) }>
                        { (this.state.slides.length > 1)?this.renderPlayStop():"" }
                    </i>
                </div>
            </div>
        );
    }
};

class HeaderBlock extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentLocation: (window.location.port !== '3000')?window.location.origin.toString():window.location.origin.split('3000')[0]+'5001'
    }
  }
  render() {
    let headergolfthrid={
        renderer:'svg',
        loop:!0,
        prerender:!0,
        autoplay:!0,
        rendererSettings:{
            progressiveLoad:!1,
            preserveAspectRatio:'xMaxYMax slice'
        },
        path: this.state.currentLocation+'/header_vast.json'
    };

    return <div className="datablock headerBlock">
      <div className="headerBackground">
        <Slider logo={this.props.logotype}/>
        <div className="snimationSVG" id="animationSVG">
          <Lottie options={headergolfthrid}/>
        </div>
      </div>

      <div className="bottomBlock">
        <div className="toNextBlock"></div>
      </div>
    </div>
  }
}

export default HeaderBlock;
