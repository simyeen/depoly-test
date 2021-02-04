import React from 'react';
import { Helmet } from 'react-helmet';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

class Lotte extends React.Component {
  render() {
    return (
      <div className="application">
        Lottie
        <Helmet>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <Player
            src="https://assets1.lottiefiles.com/private_files/lf30_zmdmlimu.json"
            background="transparent"
            speed="1"
            style={{ width: '52px', height: '28px' }}
            loop
            autoplay
          ></Player>
        </Helmet>
      </div>
    );
  }
}

export default Lotte;

//   <div>
//   <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
//   <lottie-player
//     src="https://assets1.lottiefiles.com/private_files/lf30_zmdmlimu.json"
//     background="transparent"
//     speed="1"
//     style={'width: 52px; height: 28px;'}
//     loop
//     autoplay
//   ></lottie-player>
// </div>
