import AudioManager from "../gameEngine/components/AudioManager";
import Body from "../gameEngine/components/Body";
import CollisionDetection from "../gameEngine/components/CollisionDetection";
import Entity from "../gameEngine/Entity";
import Physics from "../gameEngine/components/Physics";
import React from "react";
import ResourceManager from "../utils/ResourceManager";
import Sprite from "../gameEngine/components/Sprite";

let player;

class Player {
  constructor() {
    this.entity = new Entity(
      "Player",
      new Body(this, 200, 200, 50, 50),
      new Physics(this, 100, 100),
      new CollisionDetection(this),
      new AudioManager([
        ResourceManager.getAudioPath("soundEffect1.mp3"),
        ResourceManager.getAudioPath("soundEffect2.mp3")
      ]),
      new Sprite(
        this,
        ResourceManager.getSpritePath("explotion.png"),
        9,
        8,
        50,
        50,
        12
      ),
      null
    );
  }

  update() {
    return this.entity.update();
  }
  getBody() {
    return this.entity.getBody();
  }
}

beforeAll(() => {
  player = new Player();
});

const style = {
  height: 50,
  width: 50,
  left: 200,
  top: 200,
  position: "absolute",
  overflow: "hidden"
};

const imgStyle = {
  top: 0,
  left: 0,
  height: 450,
  width: 400,
  position: "absolute"
};

const renderDiv = (
  <div style={style}>
    <img src={"test-file-stub"} style={imgStyle} />
  </div>
);

describe("Sprite", () => {
  it("setSpeed() change speed from 12 to 400", () => {
    player.entity.getSprite().setSpeed(400);
    expect(player.entity.getSprite().speed).toBe(400);
  });

  it("animatePlayer()", () => {
    expect(player.entity.getSprite().render()).toEqual(renderDiv);
  });
});
