import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Public Route Available to all users */}
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        {/* <Route path="/lender/view-campaign/2" component={PaymentPage} /> */}

        {/* Private Route available to only authenticated User */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/new-resume" component={New_resume} />
      <PrivateRoute path="/template-a" component={TemplateA} /> */}

        {/* Error 404 - Page Not Found */}
        {/* <Route path="*" component={Error404} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
