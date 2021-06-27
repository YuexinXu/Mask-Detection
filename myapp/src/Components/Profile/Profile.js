import React from 'react';

import { MDBCard, MDBCardBody, MDBContainer,
    MDBCol, MDBRow } from "mdbreact";
const Profile = (prop) =>{

    return(
       
             <MDBContainer>
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <header className="jumbotron">
                                    <h3>
                                    <strong>User Profile</strong>
                                    </h3>
                            </header>
                            <p>
                                <strong>Token:</strong> 
                            </p>
                            <p>
                                <strong>Id:</strong> 
                            </p>
                            <p>
                                <strong>Email:</strong> 
                            </p>
                            <strong>Authorities:</strong>
                            <strong>Img: </strong>
                            /** src= "data:image/png;base64,"+img */
                            <ul>
                        
                            </ul>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        

    )



}

export default Profile;
