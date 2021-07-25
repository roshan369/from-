import { Route, Switch } from "react-router-dom";
import React from "react";
import Register from "./coumponent/Register";
import Login from "./coumponent/Login";


const App = () => {
    return (
        <>
        <Switch>
            <Route exact path="/" component={Register} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
        </Switch>

        {/* <Register />
        <Login /> */}
        </>
    )
}

export default App;