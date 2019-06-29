import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const background = require('../data/images/Depositphotos_2.png');
const background2 = require('../data/images/Depositphotos_3.png');
class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
              {
                eachSlide: 'url('+background+')',
              },
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
                this.state.active = 0;
            } else {
                this.state.active++;
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
            <div className="headerInfo">
              <div className="headerInfoTitle" data-descr="Салон красоты">Салон красоты</div>
              <div className="headerInfoText">
                Салон красоты Название это салон с историей и многолетним опытом.
                Первый салон был создан в 2003 году для модных и деловых людей,
                желающих выглядеть стильно, ухоженно и ценящих время.
                В наших салонах мы воплощаем лучшие тренды парикмахерского искусства,
                ногтевой эстетики и косметологии,
                в то же время уделяя особое внимание качеству и безопасности наших услуг,
                а также профессиональному росту наших специалистов.
                Главная наша цель – создавать красоту,
                учитывая индивидуальные потребности наших клиентов.
              </div>
            </div>
          </div>
        )
      );
    }
    renderDots() {
      return this.state.slides.map( (item, index) => (
          <li className={this.isActive(index) + ' dots' } key={ index } ref='dots'
          onClick={ this.dots.bind(this, index) } >
              <a>&#9679;</a>
          </li>
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
    }
    render(){
        return (
            <div>
                <div className='slider'>
                    <div className='wrapper' style={ this.setSliderStyles() }>
                        { this.renderSlides() }
                    </div>
                    { this.renderArrows() }
                    <ul className='dots-container'>
                        { this.renderDots() }
                    </ul>
                    <a className='toggle-play' onClick={ this.toggleAutoPlay.bind(this) }>
                        { this.renderPlayStop() }
                    </a>
                </div>
            </div>
        );
    }
};

class HeaderBlock extends React.Component {
  render() {
    return <div className="datablock headerBlock">
      <div className="headerBackground">
        <Slider/>
      </div>

      <div className="bottomBlock">
        <div className="toNextBlock"></div>
      </div>
    </div>
  }
}

export default HeaderBlock;
