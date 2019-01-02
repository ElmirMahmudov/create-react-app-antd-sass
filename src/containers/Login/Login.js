import React from 'react';
import LoginComponent from '../../components/Login/LoginComponent';
import * as ROUTES from '../../constants/routes';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }
    getInputValuesOnSubmit = (values) => {
        (async () => {
            await this.setState((prevState) => {
                return {...prevState,
                    email: values.email,
                    password: values.password
                }

            })
            this.props.history.push(ROUTES.NEWS)

        })()
    }
    render() {
        return (
            <LoginComponent
                getInputValuesOnSubmit={this.getInputValuesOnSubmit}
            />
        );
    }
}
export default Login;