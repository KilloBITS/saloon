import React from 'react';
import Zoom from 'react-reveal/Zoom';

class SignInUp extends React.Component {
  render() {
    return <div className={(this.props.modalOpen)?"datablock SignInUp":"datablock SignInUp hide"}>
      <div className="modalContent"></div>
    </div>
  }
}

export default SignInUp;
