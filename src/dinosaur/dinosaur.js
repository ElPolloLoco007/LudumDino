import React, { Component } from "react";
import "../style/App.css";
import Background from "../gameEngine/components/Background";
import DinosaurPlayer from "./objects/DinosaurPlayer";
import Tree from "./objects/Tree";
import ResourceManager from "../utils/ResourceManager";
import Menu from "../gameEngine/components/Menu";
import HUD from "../utils/Hud";
import WhiteBird from "./objects/WhiteBird";

class Dinosaur extends Component {
  constructor(props) {
    super(props);
    var playerArr;
    playerArr = [
      new DinosaurPlayer(),
      new WhiteBird(),
      new Tree(1280, 365, 200, 100),
      new Tree(1280 * 2, 365, 200, 100)
    ];

    this.state = {
      playerArr: playerArr.slice(),
      now: 0,
      then: Date.now(),
      interval: 1000 / 60,
      delta: 0,
      input: "default",
      keyPressed: false,
      endGame: false,
      score: 0,
      gap: 200 + Math.random() * 500,
      left: 6,
      gameRunning: false,
      showMenu: true
    };

    requestAnimationFrame(this.gameLoop);
  }

  gameLoop = () => {
    let now = Date.now();
    let then = this.state.then;
    let interval = this.state.interval;
    let delta = this.state.delta;

    delta = now - then;

    // restricting fps
    if (delta > interval) {
      then = now - (delta % interval);
      this.setState({ then: then });

      // restart game / end game
      if (this.state.endGame === true) {
        this.setState({
          playerArr: [
            new DinosaurPlayer(),
            new WhiteBird(),
            new Tree(1280, 365, 200, 100),
            new Tree(1280 * 2, 365, 200, 100)
          ],
          endGame: false
        });
      }

      // checking for collision
      let player = this.state.playerArr[0];

      // generate random number between 200-700
      const min = 0;
      const max = 1280;
      const len = min + Math.random() * max;

      let tree1 = this.state.playerArr[2];
      let tree2 = this.state.playerArr[3];

      // if space between tree1 and tree2 is smaller than 400
      if (
        tree2.getBody().getLeft() - tree1.getBody().getLeft() < 450 &&
        tree2.getBody().getLeft() - tree1.getBody().getLeft() >= 0
      ) {
        tree2.getBody().setLeft(1280);
      }
      // if space between tree2 and tree1 is smaller than 400
      if (
        tree1.getBody().getLeft() - tree2.getBody().getLeft() < 450 &&
        tree1.getBody().getLeft() - tree2.getBody().getLeft() >= 0
      ) {
        tree1.getBody().setLeft(1280);
      }

      // only checking if player has collided with player2, player3 or player4
      for (let index = 1; index < this.state.playerArr.length; index++) {
        let temp = this.state.playerArr;
        temp[index].len = len;
        this.setState({
          playerArr: temp
        });

        let hasPlayerCollided = player
          .getCollisionDetection()
          .checkForCollision(this.state.playerArr[index].getEntity());

        if (
          hasPlayerCollided &&
          this.state.playerArr[index].getEntity().name === "Score box"
        ) {
          this.setState({
            score: this.state.score + 500
          });
          hasPlayerCollided = false;
        }

        //this.context.gap = len;
        // if a collision is detected, checkForCollision() returns true
        if (hasPlayerCollided === true) {
          // breaking for loop is player has collided and resetting game with new objects
          this.setState({ endGame: true });
          this.setState({ gameRunning: false });
          break;
        }
      }

      // updating every player
      /*
      this.state.playerArr.forEach(element => {
        element.update();
      });*/
      if (this.state.gameRunning === true) {
        this.setState({ showMenu: false });

        this.state.playerArr.forEach(element => {
          if (this.state.keyPressed === true) {
            element.update(this.state.input);
            this.setState({ keyPressed: false });
          } else {
            element.update();
          }
        });
      } else {
        this.setState({ showMenu: true });
      }

      // when game is not running
      // if space is pressed, run the game
      if (this.state.keyPressed === true && this.state.gameRunning === false) {
        this.setState({ gameRunning: true });
        this.setState({ keyPressed: false });
      }
    }

    requestAnimationFrame(this.gameLoop);
  };

  // returning all the objects of the playerArr
  getObjects = () => {
    return this.state.playerArr.map(object => {
      return object.render();
    });
  };

  // getting the input from the main div
  getInput = e => {
    this.setState({ input: e.key, keyPressed: true });
  };

  render() {
    var scalability = {
      position: "absolute",
      width: 1280,
      height: 640,
      overflow: "hidden"
    };

    return (
      <div style={scalability}>
        <div onKeyDown={e => this.getInput(e)} tabIndex="0">
          <HUD score={this.state.score} position={"tc"} />{" "}
          <Background
            height={640}
            width={1280}
            speed={0.5}
            image={ResourceManager.getImagePath("backgroundDinosaur.png")}
          >
            {" "}
          </Background>{" "}
          <Menu showMenu={this.state.showMenu} /> {this.getObjects()}
        </div>
      </div>
    );
  }
}

export default Dinosaur;
