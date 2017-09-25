import React, { Component } from "react";

class Card extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.rotationY !== this.props.rotationY) {
      return true;
    }

    if (nextProps.size !== this.props.size) {
      return true;
    }

    return false;
  }
  render() {
    const {
      index,
      card,
      size,
      cardBack,
      cardFront,
      faceDown,
      rotationY
    } = this.props;
    console.log(card);
    return (
      <div id="card" style={{ transform: `rotateY(${rotationY}deg)` }}>
        <div
          className={faceDown === true ? "front" : "back"}
          style={{ backgroundColor: "grey", width: "100%", height: "100%" }}
        />
        <img
          className={faceDown === true ? "back" : "front"}
          src={`cards/${card.toUpperCase()}.svg`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  }
}

export default Card;
