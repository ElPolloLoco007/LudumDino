import Body from "../gameEngine/components/Body";
import Entity from "../gameEngine/Entity";
import Physics from "../gameEngine/components/Physics";
import CollisionDetection from "../gameEngine/components/CollisionDetection";

class Player {
  constructor() {
    this.entity = new Entity(
      "Player",
      new Body(this, 0, 0, 100, 100),
      new Physics(this, 5, 5),
      new CollisionDetection(this),
      null,
      null
    );
  }
  getEntityProps() {
    return this.entity.getEntityProps();
  }
  getEntity() {
    return this.entity;
  }
  getPhysics() {
    return this.entity.getPhysics();
  }

  update() {
    return this.entity.update();
  }
  getBody() {
    return this.entity.getBody();
  }
}

describe("Physics", () => {
  it("setToP to 1", () => {
    let player = new Player();

    player.getPhysics().setTop(1);
    const res = player.getPhysics().getTop();
    expect(res).toBe(1);
  });

  it("setLeft to 1", () => {
    let player = new Player();

    player.getPhysics().setLeft(1);
    const res = player.getPhysics().getLeft();
    expect(res).toBe(1);
  });

  it("setTop to 1", () => {
    let player = new Player();
    player.update();
    expect(player.getBody().getLeft()).toBe(5);
  });

  it("setEntity", () => {
    let x = new Player();
    x.getPhysics().setEntity();
    expect(x.entity.name).toBe("Player");
  });
});
