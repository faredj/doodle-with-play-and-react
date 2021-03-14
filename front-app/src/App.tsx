import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Register from "./pages/connection/register/Register"
import Login from "./pages/connection/login/Login"
import { CssBaseline } from "@material-ui/core"

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route path={"/register"} component={Register} exact={true} />
        <Route path={"/login"} component={Login} exact={true} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
