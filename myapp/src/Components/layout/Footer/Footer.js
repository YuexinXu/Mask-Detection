
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="mdb-color lighten-1" className="font-small pt-4 mt-4 absolute">
      <MDBContainer fluid className="text-center text-md-left">
             <div style={{paddingBottom: '20px'}}>
                <MDBRow className="text-center">
                    <MDBCol md='3'>
                        <a href="/">Home</a>
                    </MDBCol>
                    <MDBCol md='3'>
                        <a href="/AboutUs">About Us</a>
                    </MDBCol>
                    <MDBCol md='3'>
                        <a href="#!">Contact Us</a>
                    </MDBCol>
                    <MDBCol md='3'>
                        <a href="#!">Pricing</a>
                    </MDBCol>
                    
                </MDBRow>   
            </div>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> RocketScienceAPI.com</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;