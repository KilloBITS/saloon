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


let parseGallery = (a,css,click) => {
    const dataGallery = a.map((comp, key) => <Fade key={key}><div key={key} style={css} className="galleryPhoto" onClick={click}>
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
        openimagesrc: null,
        height: (window.innerWidth / 4),
        width: (window.innerWidth / 4)
      };
    }else{
      this.state = {
        openimagesrc: null,
        height: (window.innerWidth / 2),
        width: (window.innerWidth / 2)
      };
    }
    this.openphoto = this.openPhoto.bind(this);
    this.closephoto = this.closephoto.bind(this);
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

  openPhoto(a) {
    const imageURL = a.currentTarget.getElementsByTagName('img')[0].src;
    this.setState({
      openimagesrc: imageURL
    });
    console.log(imageURL)
  }

  closephoto(a) {
    this.setState({
      openimagesrc: null
    });
  }
  render() {
    return <div className="datablock galleryBlock">
      <div className={(this.state.openimagesrc === null)?"imageModal hiden":"imageModal"} id="imageModal">
        <div className="imageModalBlock">
          <div className="closeimageModal" onClick={this.closephoto}>
            <FontAwesomeIcon icon={['fas', 'times']} />
          </div>
          <img src={this.state.openimagesrc}/>
        </div>
      </div>
      {parseGallery(IMAGES, {width: this.state.width, height: this.state.height}, this.openphoto )}
    </div>
  }
}

export default GalleryBlock;
