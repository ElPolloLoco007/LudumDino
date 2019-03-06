import React from "react";

class ImageRender {
  constructor(entity, imgsrc) {
    this.entity = entity;
    this.imgsrc = imgsrc;
  }

  render() {
    const divStyle = {
      position: "absolute",
      overflow: "hidden",
      height: this.entity.getBody().height,
      width: this.entity.getBody().width,
      left: this.entity.getBody().left,
      top: this.entity.getBody().top
    };

    const imageStyle = {
      overflow: "hidden",
      height: "100%",
      width: "100%",
      objectFit: "fill"
    };

    return (
      <span className="frame">
        <div style={divStyle}>
          <img src={this.imgsrc} style={imageStyle} />
        </div>
      </span>
    );
  }
}

export default ImageRender;
