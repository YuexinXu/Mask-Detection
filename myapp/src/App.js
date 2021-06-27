import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import MyProfile from "./Pages/MyProfile";
import PricesPage from "./Pages/PricesPage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/layout/NavBar/NavBarTransparent";
import Footer from "./Components/layout/Footer/Footer";
import React from "react";
import BackgroundImage from "./Components/layout/Background/BackgroundImage";
import { useState} from "react";
import axios from 'axios';


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const handle_signup = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/users/signup', data)
      .then(res=> console.log(res.data))
      .catch(err=> console.log('Failed to add new user'+err));
    
  };

  const handle_login = (data) => {
    setIsLogin(true)
    window.location = '/home';
  };

  const handle_logout = (e) => {
    setIsLogin(false)
    window.location = '/home';
  };

  return (
    <React.Fragment>
      <Navbar handle_logout={handle_logout} logged_in = {isLogin}/>
      <BackgroundImage>
        <Switch>
          <Route path={["/", "/home"]} exact component={HomePage} />
          <Route
            path="/users/login"
            render={(props) => (
              <LoginPage {...props} handle_login={handle_login} />
            )}
          />
          <Route
            path="/users/signup"
            render={(props) => (
              <SignupPage {...props} handle_signup={handle_signup}/>
            )}
          />
          <Route path="/Pricing" component={PricesPage} />
          <Route path="/MyProfile" component={MyProfile} />
        </Switch>
      
      </BackgroundImage>
      {/* <ControlledCarousel/> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
