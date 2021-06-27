import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import SignUpForm from './SignupForm';
import Card from '../UI/Card/Card';


const SignUp = (props) =>{


    const saveUserDataHandler = (enteredData) => {
        const userData = {
            ...enteredData,
            role: 'user'
        }
        props.handle_signup(userData);

    }

    return(
        <Card>
            <SignUpForm onSaveUserData={saveUserDataHandler}/>
        </Card>
    )

}

export default SignUp;