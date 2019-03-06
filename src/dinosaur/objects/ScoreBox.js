import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";
import "../../style/Frame.css";

class ScoreBox {
  constructor(startPos, topPos, height, width) {
    this.len;
    this.type = "score";
    this.isHit = false;
    this.entity = new Entity(
      "Score box",
      new Body(this, 0 + startPos, topPos, height, width),
      new Physics(this, -6, 0),
      new CollisionDetection(this),
      null
    );
  }

  setIsHit(value) {
    this.isHit = value;
  }

  // entity method
  getCollisionDetection() {
    return this.entity.getCollisionDetection();
  }

  // entity method
  getEntity() {
    return this.entity;
  }

  // entity method
  getBody() {
    return this.entity.getBody();
  }

  // entity method
  getPhysics() {
    return this.entity.getPhysics();
  }

  // entity method
  update() {
    this.entity.update();
  }

  // entity method
  getEntityProps() {
    return this.entity.getEntityProps();
  }

  respawn = () => {
    this.entity.body.left = 1280 + this.len;
    this.entity.body.top = 0;
    this.isHit = false;
  };

  render() {
    let entityProps = this.getEntityProps();
    if (entityProps.bodyLeft < -100) {
      this.respawn();
    }

    let divStyleTop = {
      backgroundColor: "#00b4",
      position: "absolute",
      overflow: "hidden",
      height: entityProps.bodyHeight,
      width: entityProps.bodyWidth,
      left: entityProps.bodyLeft,
      top: entityProps.bodyTop
    };

    return (
      <span className="frame">
        <div style={divStyleTop} />
      </span>
    );
  }
}

export default ScoreBox;