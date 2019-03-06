import React, { Component } from "react";
import "../../style/Score.css";
import { AppContext } from "../../dinosaur/context";
import Logger from "../../utils/Logger";
// Shows the top ten scoreboard
class ScoreBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  // Function to remove the last item in the array
  removeLowestScore = () => {
    this.setState(index => {
      const list = this.state.list.slice(index, -1);
      return {
        list
      };
    });
  };

  // Function to render a picture, to number one on the scoreboard
  renderPrize = index => {
    if (index === 0) {
      return <img src="http://goo.gl/u1KKqp" />;
    }
    return null;
  };

  componentDidMount() {
    let isValueInArr = this.state.list.indexOf(this.context.score);
    if (isValueInArr === -1 && this.context.score !== 0) {
      let newList = this.state.list.slice();
      newList.push(this.context.score);
      this.setState({ list: newList });

      sessionStorage.setItem("list_data_key", JSON.stringify(newList));
      Logger.setText("ScoreBoard.js", "Array data is stored");
    }
  }

  UNSAFE_componentWillMount() {
    // retrieve stored data (JSON stringified) and convert
    let storedData = sessionStorage.getItem("list_data_key");
    if (storedData) {
      let newList = this.state.list.slice();
      newList = JSON.parse(storedData);
      this.setState({ list: newList });
      Logger.setText("ScoreBoard.js", "Array data is retrieved");
    }
  }

  // Function for sorting the list
  sortList = () => {
    return this.state.list
      .sort((a, b) => b - a)
      .map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}.</td>
            <td>
              {item} {this.renderPrize(index)}
            </td>
          </tr>
        );
      });
  };

  render() {
    // only allow 10 items in the list
    if (this.state.list.length > 10) {
      this.removeLowestScore();
    }
    return (
      <table>
        <TableHeader />
        <tbody>{this.sortList()}</tbody>
      </table>
    );
  }
}

// Function for the tableheader
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>No.</th>
        <th>Highscores</th>
      </tr>
    </thead>
  );
};

ScoreBoard.contextType = AppContext;

export default ScoreBoard;
