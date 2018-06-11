import React from 'react';
import LoginForm from './components/LoginForm';
import { Row, Col } from 'antd'

const LoginComponent = (props) => {
    return (
        <Row>
            <Col xs={2} sm={4} md={6} lg={8}>
            </Col>
            <Col xs={20} sm={16} md={12} lg={8}>
                <LoginForm getInputValuesOnSubmit={props.getInputValuesOnSubmit}/>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8}>
            </Col>
        </Row>
    )
}
export default LoginComponent;