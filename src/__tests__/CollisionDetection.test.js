import Body from "../gameEngine/components/Body";
import Entity from "../gameEngine/Entity";
import Physics from "../gameEngine/components/Physics";
import CollisionDetection from "../gameEngine/components/CollisionDetection";

class Player {
  constructor() {
    this.entity = new Entity(
      "Player",
      new Body(this, 0, 0, 100, 100),
      new Physics(this, 0, 0),
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
  getCollisionDetection() {
    return this.entity.getCollisionDetection();
  }
}
class Obstical {
  constructor(a, b, c, d) {
    this.entity = new Entity(
      "Obs",
      new Body(this, a, b, c, d),
      new Physics(this, 0, 0),
      new CollisionDetection(this),
      null,
      null
    );
  }
  getEntity() {
    return this.entity;
  }
  getEntityProps() {
    return this.entity.getEntityProps();
  }
  getCollisionDetection() {
    return this.entity.getCollisionDetection();
  }
}

let player;

describe("Collision Detection", () => {
  beforeAll(() => {
    player = new Player();
  });

  it("collision", () => {
    let obs = new Obstical(50, 50, 100, 100);

    const res = player
      .getCollisionDetection()
      .checkForCollision(obs.getEntity());
    expect(res).toBe(true);
    expect(player.getCollisionDetection().getFlag()).toBe(true);
    expect(player.getCollisionDetection().getType()).toBe("Obs");
  });
  it("no collision", () => {
    let obs = new Obstical(150, 150, 100, 100);

    const res = player
      .getCollisionDetection()
      .checkForCollision(obs.getEntity());
    expect(res).toBe(false);
    expect(player.getCollisionDetection().getFlag()).toBe(false);
  });
});
