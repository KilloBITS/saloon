import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IMAGES =
[{
        src: require('../data/photo/1.jpg'),
        thumbnail: require('../data/photo/1.jpg'),
},
{
        src: require('../data/photo/2.jpg'),
        thumbnail: require('../data/photo/2.jpg'),
},
{
        src: require('../data/photo/3.jpg'),
        thumbnail: require('../data/photo/3.jpg'),
},
{
        src: require('../data/photo/4.jpg'),
        thumbnail: require('../data/photo/4.jpg'),
},
{
        src: require('../data/photo/5.jpg'),
        thumbnail: require('../data/photo/5.jpg'),
},
{
        src: require('../data/photo/6.jpg'),
        thumbnail: require('../data/photo/6.jpg'),
},
{
        src: require('../data/photo/7.jpg'),
        thumbnail: require('../data/photo/7.jpg'),
},
{
        src: require('../data/photo/8.jpg'),
        thumbnail: require('../data/photo/8.jpg'),
}];

let parseGallery = (a,css) => {
    const dataGallery = a.map((comp, key) => <Fade key={key}><div key={key} style={css} className="galleryPhoto">
      <img src={comp.src} alt=""/>
      <div className="hoverImage" style={{  lineHeight: css.width+'px'}}><FontAwesomeIcon icon={['fas', 'search-plus']} /></div>
    </div></Fade>);
    return dataGallery
}

class GalleryBlock extends React.Component {
  constructor() {
    super();
    if(document.body.offsetWidth > 800){
      this.state = {
        height: (window.innerWidth / 4),
        width: (window.innerWidth / 4)
      };
    }else{
      this.state = {
        height: (window.innerWidth / 2),
        width: (window.innerWidth / 2)
      };
    }

    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    if(document.body.offsetWidth > 800){
      this.setState({
        height: (window.innerWidth / 4),
        width: (window.innerWidth / 4)
      });
    }else{
      this.setState({
        height: (window.innerWidth / 2),
        width: (window.innerWidth / 2)
      });
    }
  }
  render() {
    return <div className="datablock galleryBlock">
      {parseGallery(IMAGES, {width: this.state.width, height: this.state.height} )}
    </div>
  }
}

export default GalleryBlock;
