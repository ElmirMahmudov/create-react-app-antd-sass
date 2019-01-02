import React from 'react';
import LoginForm from './components/LoginForm';
import { Row, Col, Layout } from 'antd'
import MyHeader from '../Reuseable/Header';
import MyContent from '../Reuseable/Content';

const LoginComponent = (props) => {
    return (
        <Layout>
            <MyHeader/>
            <MyContent>
                <Row>
                    <Col xs={8}>
                    </Col>
                    <Col xs={8}>
                        <h1>
                            Login
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} sm={4} md={6} lg={8}>
                    </Col>
                    <Col xs={20} sm={16} md={12} lg={8}>
                        <LoginForm getInputValuesOnSubmit={props.getInputValuesOnSubmit}/>
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8}>
                    </Col>
                </Row>
            </MyContent>
        </Layout>
    )
}
export default LoginComponent;