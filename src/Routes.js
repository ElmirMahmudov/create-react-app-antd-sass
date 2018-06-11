import React from "react";
import { BrowserRouter ,Route } from "react-router-dom";

import Login from './containers/Login/Login';
import News from './containers/News/News';

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Route path={`/login`} component={Login} />
                    <Route path={`/news`} component={News} />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}
export default Routes;