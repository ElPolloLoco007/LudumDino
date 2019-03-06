import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import "../../style/Frame.css";
import ImageRender from "../../gameEngine/components/ImageRender";
import ResMan from "../../utils/ResourceManager";

class Tree {
  constructor(startPos, topPos, height, width) {
    this.len;
    this.entity = new Entity(
      "Tree",
      new Body(this, 0 + startPos, topPos, height, width),
      new Physics(this, -6, 0),
      new CollisionDetection(this),
      null,
      null,
      new ImageRender(this, ResMan.getImagePath("tree.png"))
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

  getImage() {
    return this.entity.getImage();
  }

  componentDidUpdate() {
    this.entity.update();
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

    return this.getImage().render();
  }
}

export default Tree;
