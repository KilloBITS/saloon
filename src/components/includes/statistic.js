import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const bg = require('../../data/images/bg2.png')
class StatisticBlock extends React.Component {
  render() {
    return <div className="datablock statisticBlock">
      <div className="content1024">
        <div className="statistic_background">
          <img src={bg}/>
        </div>
        <div className="statistic_block"></div>
      </div>
    </div>
  }
}

export default StatisticBlock;
