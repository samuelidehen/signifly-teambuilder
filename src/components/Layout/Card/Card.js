import React, { Component } from "react";
import classes from "./Card.module.css";
import PropTypes from "prop-types";

class Card extends Component {
  state = {
    width: 0,
    height: 0,
    mouseY: 0,
    mouseX: 0
  };
  cardEl = null;

  componentDidMount() {
    const height = this.cardEl.clientHeight;
    const width = this.cardEl.clientWidth;
    this.setState({ height, width });
  }
  get mousePX() {
    const { mouseX, width } = this.state;
    return mouseX / width;
  }

  get mousePY() {
    const { mouseY, height } = this.state;
    return mouseY / height;
  }

  get cardStyle() {
    const rX = this.mousePX * 30;
    const rY = this.mousePY * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    };
  }
  mouseEnterHandler = () => {};

  mouseMoveHandler = e => {
    const { width, height } = this.state;
    const mouseX = e.pageX - this.cardEl.offsetLeft - width / 2;
    const mouseY = e.pageY - this.cardEl.offsetTop - height / 2;

    this.setState({
      mouseX,
      mouseY
    });
  };

  mouseLeaveHandler = () => {
    setTimeout(() => {
      this.setState({
        mouseX: 0,
        mouseY: 0
      });
    }, 1000);
  };
  render() {
    return (
      <div
        className={classes.cardwrap}
        ref={cardEl => (this.cardEl = cardEl)}
        onMouseEnter={this.mouseEnterHandler}
        onMouseMove={this.mouseMoveHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        <div className={classes.card} style={this.cardStyle}>
          <div className={classes.cardbg}>
            <img
              src={this.props.teamMember.fields.picture.fields.file.url}
              alt="Card2"
            />{" "}
          </div>
          <div className={classes.cardinfo}>
            <h1 name="header">{this.props.teamMember.fields.name}</h1>
            <h1 name="content"> {this.props.teamMember.fields.description}</h1>
            <h1 name="content"> {this.props.teamMember.fields.phoneNumber}</h1>
            <h1 name="content"> {this.props.teamMember.fields.department}</h1>
          </div>
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  teamMember: PropTypes.object.isRequired
};
export default Card;
