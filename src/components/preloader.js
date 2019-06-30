import React from 'react';

class Preloader extends React.Component {
  render() {
    return <div className="Preloader" id="Preloader">
      <div className="loadingAnimation">
        <svg className="pet1" width="100" height="100" viewBox="-12 -12 100 100">
          <path className="petal-1" d="M16.3 37.65Q-12.457227 28.917383 9.525 8.425 31.473633 -12.042188 38.225 17.2 45.033398 46.443555 16.3 37.65"></path>
        </svg>
        <svg className="pet2" width="100" height="100" viewBox="-12 -12 100 100">
          <path className="petal-2" d="M46.075 20.125Q68.475391 0.18730469 74.6 29.55 80.694141 58.914453 52.175 49.525 23.664844 40.082617 46.075 20.125"></path>
        </svg>
        <svg className="pet3" width="100" height="100" viewBox="-12 -12 100 100">
          <path className="petal-3" d="M49.45 56.45Q56.604102 85.581641 27.775 77.25 -1.0511719 68.885742 20.575 48.1 42.24668 27.332227 49.45 56.45"></path>
        </svg>
      </div>
    </div>
  }
}

export default Preloader;
