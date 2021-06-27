import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Card from "../UI/Card/Card";

const Login = (props) => {

  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");


  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handlelogin = (e) => {
    e.preventDefault();
    const loginData = {
      email: enteredEmail,
      password: enteredPassword
    };
    props.handle_login(loginData);

  };

  return (
    <Card>
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center align-item-center">
          <MDBCol md="6">
            <form onSubmit={handlelogin}>
              <p className="h4 text-center mb-4 white-text">Log In</p>
              <label htmlFor="defaultFormLoginEmailEx" className="white-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
                name="email"
                value={enteredEmail}
                onChange={onChangeEmail}
              />
              <br />
              <label
                htmlFor="defaultFormLoginPasswordEx"
                className="white-text"
              >
                Your password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
                name = "password"
                value = {enteredPassword}
                onChange={onChangePassword}
              />
            <div className="text-center">
            <MDBBtn gradient="aqua" style={{marginTop:"5%"}} type = "submit">Log In</MDBBtn>
            </div>
            
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Card>
  );
};

export default Login;
