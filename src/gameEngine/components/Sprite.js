import React from "react";

class Sprite {
  constructor(
    entity,
    spriteSheet,
    rows,
    columns,
    spriteHeight,
    spriteWidth,
    speed
  ) {
    this.entity = entity;
    this.spriteSheet = spriteSheet;
    this.spriteHeight = spriteHeight;
    this.spriteWidth = spriteWidth;
    this.spriteSheetHeight = rows * spriteHeight;
    this.spriteSheetWidth = columns * spriteWidth;
    this.rowsArr = [];
    this.columnsArr = [];

    for (let index = 0; index < rows; index++) {
      for (let j = 0; j < columns; j++) {
        this.rowsArr.push(-index * this.spriteHeight);
        this.columnsArr.push(-j * this.spriteWidth);
        // console.log(-index * this.spriteHeight);
      }
    }

    // fps variables
    this.fps = 60;
    this.now = Date.now();
    this.then = Date.now();
    this.interval = 1000 / 60;
    this.delta = 0;

    // animate player variables
    this.counterChange = 0;
    this.spriteLeft = 0;
    this.spriteTop = 0;
    this.speed = speed;
    this.counter = 0;
    this.size = rows * columns - 1;

    requestAnimationFrame(this.animatePlayer);
  }

  animatePlayer = () => {
    this.now = Date.now();
    this.delta = this.now - this.then;

    if (this.delta > this.interval) {
      ++this.counterChange;

      this.then = this.now - (this.delta % this.interval);

      if (this.counterChange > this.speed) {
        this.spriteTop = this.rowsArr[this.counter];
        this.spriteLeft = this.columnsArr[this.counter];
        this.counterChange = 0;

        // console.log('Trying to update sprite!')
        //console.log(this.rowsArr[this.counter]);
        //console.log(this.columnsArr[this.counter]);

        if (this.counter >= this.size) {
          this.counter = 0;
        } else {
          ++this.counter;
        }
      } else {
        ++this.counterChange;
      }
    }
    requestAnimationFrame(this.animatePlayer);
  };

  setSpeed(value) {
    this.speed = value;
  }

  render() {
    let divStyle = {
      height: this.spriteHeight,
      width: this.spriteWidth,
      top: this.entity.getBody().getTop(),
      left: this.entity.getBody().getLeft(),
      position: "absolute",
      overflow: "hidden"
    };

    let imgStyle = {
      height: this.spriteSheetHeight,
      width: this.spriteSheetWidth,
      top: this.spriteTop,
      left: this.spriteLeft,
      position: "absolute"
    };
    return (
      <div style={divStyle}>
        <img src={this.spriteSheet} style={imgStyle} />
      </div>
    );
  }
}

export default Sprite;
