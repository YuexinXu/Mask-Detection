import Login from '../Components/LogIn/Login';


const LoginPage = (props)=>{
    return(
        <div style={{marginTop: "20%"}}>
             <Login handle_login={props.handle_login}></Login>
        </div>
       
    )
}

export default LoginPage;