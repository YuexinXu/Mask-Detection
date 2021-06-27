import React from 'react';
import { MDBMask, MDBContainer} from 'mdbreact';
import Card from '../../UI/Card/Card';

const Mask = ()=>{

    return(
        <>
          <MDBMask className="flex-center flex-column text-white text-center">
                <h2>Never Feel That Easy</h2>
                <h5>Face-ID enabled log in so you don't need to take off your mask</h5>
                <p>Cutting edge technology embedded including Maching learning and Artificial Intelligence</p><br />
          </MDBMask>
          {/* <main>
            <MDBContainer className="text-center my-5">
              <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </MDBContainer>
          </main> */}
        </>
    )
}

export default Mask;


