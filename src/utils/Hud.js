/*
position:
c       [center]
tc      [top center]
trc     [top right corner]
tlc     [top left center]
bc      [bottom corner]
brc     [bottom right corner]
blc     [bottom left corner]

*/
import React from "react";
import "../style/Hud.css";

export default class HUD extends React.Component {
  render() {
    return (
      <div className={`hud ${this.props.position}`}>{this.props.score}</div>
    );
  }
}
