import React, { Component } from "react";

class Sound extends Component {
  
  playSound = () => {
    var soundOn = this.props.soundOn;
    var loopMp3 = this.props.loopMp3;

    if (soundOn === true)
    {
      if (loopMp3 === true)
      {
        return (
        <audio controls loop autoPlay hidden>
        <source src={this.props.soundFile}></source>
        </audio>
        )
      }
      else
      {
        return (
        <audio controls autoPlay hidden>
        <source src={this.props.soundFile}></source>
        </audio>
        )
      }
    }
  }

  render() {
    return (
      <div>{this.playSound()}</div>
    )
  }
}
export default Sound;

/* **DØMI AT IMPLEMENTERA**
<div>
  <Audio
    soundOn={false}
    loopMp3={false}
    soundFile={song}
  >
  {" "}
  </Audio>{" "}
</div>
*/