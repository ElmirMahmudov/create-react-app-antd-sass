import React from "react";
import { BrowserRouter ,Route, Redirect } from "react-router-dom";
import * as ROUTES from './constants/routes';

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
                    <Route path={ROUTES.LOGIN} component={Login}/>
                    <PrivateRoute path={ROUTES.NEWS} component={News}/>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}
export default Routes;