import React from 'react';
import LoginComponent from '../../components/Login/LoginComponent';
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        email: null,
        password: null
    }
    getInputValuesOnSubmit = (values) => {
        (async () => {
            await this.setState((prevState, props) => {
                return {...prevState,
                    email: values.email,
                    password: values.password
                }

            })

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