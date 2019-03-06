import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";
import "../../style/Frame.css";
import ResMan from "../../utils/ResourceManager";

class Tree {
  constructor(startPos, topPos, height, width) {
    this.len;
    this.entity = new Entity(
      "Tree",
      new Body(this, 0 + startPos, topPos, height, width),
      new Physics(this, -6, 0),
      new CollisionDetection(this),
      null
    );
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
    this.entity.body.top = 365;
  };

  render() {
    let entityProps = this.getEntityProps();
    if (entityProps.bodyLeft < -100) {
      this.respawn();
    }

    let divStyle = {
      position: "absolute",
      overflow: "hidden",
      height: entityProps.bodyHeight,
      width: entityProps.bodyWidth,
      left: entityProps.bodyLeft,
      top: entityProps.bodyTop
    };

    const imgStyle = {
      overflow: "hidden",
      height: "100%",
      width: "100%",
      objectFit: "fill"
    };

    return (
      <span className="frame">
        <div style={divStyle}>
          <img src={ResMan.getImagePath("tree.png")} style={imgStyle} />
        </div>
      </span>
    );
  }
}

export default Tree;
