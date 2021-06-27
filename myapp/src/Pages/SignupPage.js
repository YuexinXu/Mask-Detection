
import SignUp from '../Components/SignUp/SignUp';
const SignUpPage = (props)=>{
    return(
        <div>
            <SignUp handle_signup={props.handle_signup}/>
        </div>
       
    )
}

export default SignUpPage;