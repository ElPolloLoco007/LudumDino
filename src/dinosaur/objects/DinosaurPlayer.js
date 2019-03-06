import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import { isNullOrUndefined } from "util";
import ResMan from "../../utils/ResourceManager";
import AudioManager from "../../gameEngine/components/AudioManager";
import Sprites from "../../gameEngine/components/Sprite";

class DinosaurPlayer {
  constructor() {
    this.isSpacePressed = false;
    this.entity = new Entity(
      "DinosaurPlayer",
      new Body(this, 250, 460, 70, 70),
      new Physics(this, 0, 0),
      new CollisionDetection(this),
      new AudioManager([
        ResMan.getAudioPath("soundEffect1.mp3"),
        ResMan.getAudioPath("soundEffect2.mp3"),
        ResMan.getAudioPath("soundEffect3.mp3")
      ]),
      new Sprites(
        this,
        ResMan.getSpritePath("dinosaursRunning.png"),
        1,
        4,
        100,
        100,
        12
      )
    );
    this.counterDinosaurJump = 0;
    this.enum = {
      DINOSAUR_JUMPS: 0,
      DINOSAUR_SCORE: 1,
      DINOSAUR_DIES: 2
    };
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
  getAudioManager() {
    return this.entity.getAudioManager();
  }

  // entity method
  getSprite() {
    return this.entity.getSprite();
  }

  // entity method
  update(value) {
    // if collision flag is set true
    if (this.getCollisionDetection().getFlag() === true) {
      console.log("Collsion flagged!");
      if (this.getCollisionDetection().getType() === "Score box") {
        this.getAudioManager().play(this.enum.DINOSAUR_SCORE);
      } else {
        this.getAudioManager().play(this.enum.DINOSAUR_DIES);
      }
    }

    //if value is something else than null or undefined, it will be put into a switch
    console.log(this.counterDinosaurJump + " dinosaur jump");
    if (!isNullOrUndefined(value) && this.isSpacePressed === false) {
      switch (value) {
        case "w":
        case "ArrowUp":
        case " ":
          this.counterDinosaurJump = 20;
          this.getAudioManager().play(this.enum.DINOSAUR_JUMPS);
          this.isSpacePressed = true;
          console.log("Space pressed");
          break;
        default:
          console.log(value + " Invalid input!");
          break;
      }
    }

    if (this.counterDinosaurJump > 0){
      --this.counterDinosaurJump;
    }

    // Dinosaur jumps
    if (this.counterDinosaurJump >= 10) {
      if (this.getBody().getTop() > 459) {
        this.getPhysics().setTop(-12); // jump up
        this.getSprite().setSpeed(100); // decrease speed
      }
    } else {
      if (this.getBody().getTop() < 150) {
        this.getPhysics().setTop(6); // jump dow
      }
      if (this.getBody().getTop() > 459) {
        this.getPhysics().setTop(0); // stop jump
        this.getSprite().setSpeed(12); // speed back to normal
        this.isSpacePressed = false
      }
    }

    // updating this.entity
    this.entity.update();
  }

  // entity method
  getEntityProps() {
    return this.entity.getEntityProps();
  }

  // rendering this class
  render() {
    return this.getSprite().render();
  }
}

export default DinosaurPlayer;
