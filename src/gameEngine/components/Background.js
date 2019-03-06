import React, { Component } from "react";

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moveImg1: 0, // initial starting point of image1
      moveImg2: this.props.width // initial starting point of image2
    };

    window.requestAnimationFrame(this.movingBackgroundImage); // starting the animation
  }

  // function that requestAnimationFrame keeps on calling approx 60 times a second
  movingBackgroundImage = () => {
    const speed = this.props.speed; // speed of the animation
    const width = this.props.width; // width of the image

    let moveImg1Copy = this.state.moveImg1;
    let moveImg2Copy = this.state.moveImg2;

    if (moveImg1Copy > -width + speed) {
      this.setState({ moveImg1: this.state.moveImg1 - speed });
    } else {
      this.setState({ moveImg1: width });
    }

    if (moveImg2Copy > -width + speed) {
      this.setState({ moveImg2: this.state.moveImg2 - speed });
    } else {
      this.setState({ moveImg2: width });
    }
    window.requestAnimationFrame(this.movingBackgroundImage); // calling the requestAnimationFrame recursively
  };

  render() {
    var styleDiv = {
      position: "absolute",
      width: this.props.width,
      height: this.props.height,
      overflow: "hidden"
    };

    var styleImg1 = {
      position: "absolute",
      left: this.state.moveImg1
    };

    var styleImg2 = {
      position: "absolute",
      left: this.state.moveImg2
    };
    return (
      <div style={styleDiv}>
        <img src={this.props.image} style={styleImg1} />
        <img src={this.props.image} style={styleImg2} />
      </div>
    );
  }
}
Background.defaultProps = {
  speed: 0,
  height: 1080,
  width: 1920
};

export default Background;

/* **DØMI AT IMPLEMENTERA**
<div>
  <Background
    height={1080}
    width={1920}
    speed={0.5}
    image={BackgroundImg}
  >
  {" "}
  </Background>{" "}
  </div>
  */
