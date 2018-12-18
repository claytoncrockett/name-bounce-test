import React from "react";

class Letter extends React.Component {
  myRef = React.createRef();

  collisionCheck = (el, bounding) => {
    const { vx, vy } = this.props;
    if (el.offsetLeft <= 0 && vx < 0) {
      this.props.collision(this.props.index, "h");
    }
    if (el.offsetLeft + el.offsetWidth >= bounding.offsetWidth) {
      this.props.collision(this.props.index, "h");
    }
    if (el.offsetTop <= 0 && vy < 0) {
      this.props.collision(this.props.index, "v");
    }
    if (el.offsetTop + el.offsetHeight >= bounding.offsetHeight) {
      this.props.collision(this.props.index, "v");
    }
  };

  mover = (el, bounding) => {
    this.collisionCheck(el, bounding);
    el.style.left = el.offsetLeft + this.props.vx + "px";
    el.style.top = el.offsetTop + this.props.vy + "px";
    this.itemTimeout = setTimeout(() => {
      this.mover(el, bounding);
    }, 10);
  };

  start = el => {
    el.style.left =
      Math.floor(Math.random() * (window.innerWidth - 150)) + "px";
    el.style.top =
      Math.floor(Math.random() * (window.innerHeight - 150)) + "px";
  };

  componentDidMount() {
    const bouncer = this.myRef.current;
    const windowContainer = document.getElementById("App");
    this.start(bouncer);
    this.mover(bouncer, windowContainer);
  }

  render() {
    return (
      <div className="floating" ref={this.myRef}>
        <h1 className="nameheader">{this.props.letter}</h1>
      </div>
    );
  }
}

export default Letter;
