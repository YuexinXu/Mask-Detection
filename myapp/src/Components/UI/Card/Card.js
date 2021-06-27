import classes from "./Card.module.css";
import {MDBAnimation} from 'mdbreact';
const Card = (props) => {
  return (
    <MDBAnimation type="fadeInUp">
      <div className={classes.card}>{props.children}</div>
    </MDBAnimation>
  );
};

export default Card;
