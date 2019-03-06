import React from "react";
import Logger from "./Logger";

class LoggerManager extends React.Component {
  constructor() {
    super();
  }

  dims = () => {
    const style = {
      position: "absolute",
      borderCollapse: "collapse",
      width: "100%",
      zIndex: 10,
      fontFamily: "sansSerif",
      fontSize: "12px",
      color: "#fff"
    };
    const font = {
      fontFamily: "sans-serif",
      color: "#000",
      backgroundColor: "#DDD"
    };
    const fontHeader = {
      fontFamily: "sans-serif",
      fontSize: "24px",
      font: "bold",
      color: "#000",
      backgroundColor: "#DDD"
    };
    const items = Logger.getList();
    return (
      <table style={style}>
        <thead>
          <tr>
            <th style={fontHeader}>from</th>
            <th style={fontHeader}>message</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td style={font}>{item.from}</td>
                <td style={font}>{item.message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  render() {
    const style = {
      position: "absolute",
      zIndex: 9,
      fontFamily: "sansSerif",
      fontSize: "128px",
      font: "bolder",
      color: "#fff",
      right: 50,
      width: 500,
      height: 300,
      overflow: "auto"
    };
    return <div style={style}>{this.dims()}</div>;
  }
}

export default LoggerManager;
