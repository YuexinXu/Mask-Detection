import {MDBView} from 'mdbreact';
import classes from './BackgroundImage.module.css';

const BackgrounImage = (props) => {
  return (
    <MDBView className={classes.view} src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80">
        {props.children}
    </MDBView>
  );
};

export default BackgrounImage;
