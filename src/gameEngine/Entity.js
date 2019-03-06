import Logger from "../utils/Logger";
class Entity {
  constructor(
    name,
    body,
    physics,
    collisionDetection,
    audioManager,
    sprite,
    image
  ) {
    // name of entity
    this.name = name;
    Logger.setText("Entity.js", `name: ${this.name}`);

    // Body component
    if (body !== null) {
      this.body = body;
      Logger.setText("Entity.js", "Successfully set body!");
    } else {
      this.body = null;
      Logger.setText("Entity.js", "Body component omitted!");
    }

    // Physics component
    if (physics !== null) {
      this.physics = physics;
      Logger.setText("Entity.js", "Successfully set physics!");
    } else {
      this.physics = null;
      Logger.setText("Entity.js", "physics component omitted!");
    }

    // CollisionDetection component
    if (collisionDetection !== null) {
      this.collisionDetection = collisionDetection;
      Logger.setText("Entity.js", "Successfully set collisionDetection!");
    } else {
      this.collisionDetection = null;
      Logger.setText("Entity.js", "collisionDetection component omitted!");
    }

    // AudioManager component
    if (audioManager !== null) {
      this.audioManager = audioManager;
      Logger.setText("Entity.js", "Successfully set audioManager!");
    } else {
      this.audioManager = null;
      Logger.setText("Entity.js", "audioManager component omitted!");
    }

    // sprite component
    if (sprite !== null) {
      this.sprite = sprite;
      Logger.setText("Entity.js", "Successfully set sprite!");
    } else {
      this.sprite = null;
      Logger.setText("Entity.js", "sprite component omitted!");
    }

    if (image !== null) {
      this.image = image;
      Logger.setText("Entity.js", "Successfully set image!");
    } else {
      this.image = null;
      Logger.setText("Entity.js", "image component omitted!");
    }
  }
  // x
  getEntity() {
    return this;
  }
  // x
  getName() {
    return this.name;
  }
  // x
  getBody() {
    return this.body;
  }
  // c
  getPhysics() {
    return this.physics;
  }

  getCollisionDetection() {
    return this.collisionDetection;
  }
  // x
  getAudioManager() {
    return this.audioManager;
  }
  // x
  getSprite() {
    return this.sprite;
  }
  // x
  getImage() {
    return this.image;
  }
  // x
  update() {
    this.physics.update();
  }
  // x
  getEntityProps() {
    const props = {
      // entity name
      name: this.name,

      // body props
      bodyHeight: this.body.getHeight(),
      bodyWidth: this.body.getWidth(),
      bodyTop: this.body.getTop(),
      bodyLeft: this.body.getLeft(),

      // physics props
      physicsLeft: this.physics.getLeft(),
      physicsTop: this.physics.getTop()
    };
    return props;
  }
}

export default Entity;
