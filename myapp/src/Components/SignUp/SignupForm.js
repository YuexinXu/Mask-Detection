import React, { useState} from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";


const SignupForm = (props) => {


  const [enteredfirstname, setFirstName] = useState("");
  const [enteredlastname, setLastName] = useState("");
  const [enteredemail, setEmail] = useState("");
  const [enteredpassword, setPassword] = useState("");
  const [enteredpic, setPic] = useState("");


  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const _handleReaderLoaded = (readerEvent)=>{
    let binaryString = readerEvent.target.result;
    setPic(btoa(binaryString));
  }

  const picChangeHandler = (event) => {
    let file = event.target.files[0];

    //check if file exists
    if(file){
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file)
    }

  };

  const submitHandler = (event) => {
    event.preventDefault();

    const signUpData = {
      firstname: enteredfirstname,
      lastname: enteredlastname,
      email: enteredemail,
      password: enteredpassword,
      img: enteredpic,
    };

    props.onSaveUserData(signUpData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPic("");
  };

  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="6">
          <MDBCard style = {{backgroundColor: "white"}}>
            <MDBCardBody>
              <form onSubmit={submitHandler}>
                    <p className="h4 text-center py-4">Sign up</p>
                    <div className="grey-text">
                      <MDBInput
                        label="First name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        required
                        value={enteredfirstname}
                        onChange={firstNameChangeHandler}
                      />
                      <MDBInput
                        label="Last name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        required
                        value={enteredlastname}
                        onChange={lastNameChangeHandler}
                      />
                      <MDBInput
                        label="Work email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        required
                        value={enteredemail}
                        onChange={emailChangeHandler}
                      />
                      <MDBInput
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        required
                        value={enteredpassword}
                        onChange={passwordChangeHandler}
                      />
                      {/* <MDBInput
                        label="Confirm Your password"
                        icon="exclamation-triangle"
                        group
                        type="password"
                        validate
                        error="wrong"
                        success="right"
                        required
                      /> */}
                      <div className="input-group">
                        <div className="input-group-prepend"></div>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                            onChange={picChangeHandler}
                            name="image"
                            accept=".jpeg, .png, .jpg"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="inputGroupFile01"
                          >
                            Upload Your Headshot
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="cyan" type="submit">
                        Register
                      </MDBBtn>
                    </div>
                  
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignupForm;

