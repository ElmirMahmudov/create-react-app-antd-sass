import React from 'react';
import LoginComponent from '../../components/Login/LoginComponent';
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
            this.props.history.push('/news')

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