import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [49.8418, 24.0313]
const map = (
  <Map center={position}  scrollWheelZoom={false} zoom={6} id="map">
    <TileLayer url="http://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"/>
    <Marker position={position}>
      <Popup>Position</Popup>
    </Marker>
  </Map>
)

class MapBlock extends React.Component {
  toTopThisScroll(){
    document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: 0, behavior: 'smooth'});
  }
  render() {
    return <div className="datablock mapBlock">
      {map}
    </div>
  }
}

export default MapBlock;
