import React from 'react';
import LoginForm from './components/LoginForm';
import { Row, Col, Layout } from 'antd'

const { Header, Content } = Layout;

const LoginComponent = (props) => {
    return (
        <Layout>
            <Header />
            <Content>
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
            </Content>
        </Layout>
    )
}
export default LoginComponent;