import React from "react";
import "../../style/menu.css";
import ScoreBoard from "./ScoreBoard";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [{ text: "Score" }],
      showMenu: true,
      showScore: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e === "Score")
      this.setState({
        showScore: !this.state.showScore
      });
  }
  render() {
    const menuItems = this.state.menuItems.map((item, index) => (
      <MenuItem key={index} item={item} handleClick={this.handleClick} />
    ));

    let scoreBoard = (
      <div className="wrapper-scoreBoard">
        <ScoreBoard />
      </div>
    );
    let gameMenu = (
      <div className="wrapper-menu">
        <div className="menu-items">
          <div className="menu-text">Press any key to start</div> {menuItems}
        </div>
      </div>
    );

    return (
      <div className={`menu ${this.props.position}`}>
        {this.props.showMenu ? gameMenu : this.state.showMenu}
        {this.state.showScore && this.props.showMenu
          ? scoreBoard
          : this.props.showScore}
      </div>
    );
  }
}

function MenuItem(props) {
  return (
    <button
      className="menu-item"
      id={props.item.text}
      onClick={() => props.handleClick(props.item.text)}
    >
      {props.item.text.toUpperCase()}
    </button>
  );
}

export default Menu;
