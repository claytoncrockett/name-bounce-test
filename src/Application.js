import React from "react";
import Letter from "./Letter";

class Application extends React.Component {
  state = {
    velocity: [
      [-3, 3, 0],
      [3, -3, 1],
      [-3, -3, 2],
      [3, 3, 3],
      [-3, 3, 4],
      [3, -3, 5],
      [-3, -3, 6]
    ],
    letters: ["C", "L", "A", "Y", "T", "O", "N"]
  };

  collision = (index, direction) => {
    let arr = this.state.velocity;
    switch (direction) {
      case "h":
        arr[index][0] *= -1;
        this.setState({ velocity: arr });
        break;
      case "v":
        arr[index][1] *= -1;
        this.setState({ velocity: arr });
        break;
      default:
        break;
    }
    this.setState({ velocity: arr });
  };

  render() {
    return (
      <div id="App">
        <div className="fullname">
          {this.state.velocity.map(arr => {
            return (
              <Letter
                key={arr[2]}
                letter={this.state.letters[arr[2]]}
                vx={arr[0]}
                vy={arr[1]}
                index={arr[2]}
                collision={this.collision}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Application;
