import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody,
MDBCol, MDBRow } from "mdbreact";

const PriceGroup = () => {
  return (
    
        <MDBCardGroup>
        <MDBRow className="d-flex justify-content-center">
        <MDBCol md='3'>
            <MDBCard>
                <MDBCardImage src="https://images.unsplash.com/photo-1618871946566-d8f49c5976e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="MDBCard image cap" top hover
                overlay="white-slight" />
                <MDBCardBody style={{backgroundColor:"white"}}>
                <MDBCardTitle tag="h5">Free Version</MDBCardTitle>
                <MDBCardText>
                    Limited Database Usage
                    Limited Project Usage
                    No Premium Tool Access
                </MDBCardText>
                <MDBBtn color="indigo" size="md">
                    read more
                </MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
     
    <MDBCol md='3'>
      <MDBCard>
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody style={{backgroundColor:"white"}}>
          <MDBCardTitle tag="h5">$10 per employee/month</MDBCardTitle>
          <MDBCardText>
          Professional
          Unlimited Use of Database
          </MDBCardText>
          <MDBBtn color="indigo" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
    
      <MDBCol md='3' >
      <MDBCard>
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody style={{backgroundColor:"white"}}>
          <MDBCardTitle tag="h5">$30 per employee/month</MDBCardTitle>
          <MDBCardText>
            Enterprise Version
            Unlimited Usage of Database
          </MDBCardText>
          <MDBBtn color="indigo" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>
    </MDBCardGroup>
    
  );
}

export default PriceGroup;