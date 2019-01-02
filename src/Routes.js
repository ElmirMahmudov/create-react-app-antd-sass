import React from "react";
import { BrowserRouter ,Route, Redirect, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes';

import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import News from './containers/News/News';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route {...rest} render={(props) => {
                return (
                    true
                    ? <Component {...props} />
                    : <Redirect to={ROUTES.LOGIN} />
                )
            }}
        />
    )
}


class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        <Route path={ROUTES.LOGIN} component={Login}/>
                        <PrivateRoute path={ROUTES.NEWS} component={News}/>
                        <Route path={ROUTES.HOME} component={Home}/>
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}
export default Routes;