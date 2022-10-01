import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Style from "./Style.css";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Main from "./Main";
// import RemoveUser from "./RemoveUser";
// import UpdateProfile from "./UpdateProfile";
// import ProfileGet from "./ProfileGet";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Testing from "./Testing";

// import Postman from "./component/Postman";
// import Upload from "./component/Upload";
// import Base64image from "./component/Base64image";

// import DropBox from "./component/DropBox";
// import FormValidiate from "./component/FormValidiate";
// import Demo from "./context/Demo";
// import Count from "./reducer/Count";

const PrivateRoute = (props) => {
  const token = localStorage.getItem("Token");
  if (token) {
    return <Route exact={true} path={props.path} component={props.component} />;
  } else {
    return <signIn {...props} />;
  }
};
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact={true} path="/signIn" component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        <Route path="/testing" component={Testing} />

        <PrivateRoute exact path="/main" component={Main} />

        {/* <PrivateRoute exact path="/removeUser" component={RemoveUser} />
        <PrivateRoute exact path="/updateProfile" component={UpdateProfile} />
        <PrivateRoute exact path="/profileGet" component={ProfileGet} /> */}
        {/* <Route exact path="/navbar" component={Navbar} /> */}

        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
