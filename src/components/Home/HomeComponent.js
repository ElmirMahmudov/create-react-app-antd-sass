import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { Layout, Button, Row, Col } from 'antd';
import MyHeader from '../Reuseable/Header';

const { Content } = Layout;

const HomeComponents = (props) => {
    return (
        <Layout>
            <MyHeader/>
            <Content>
                <Row justify="center" type="flex">
                    <Col md={2}>
                        <Link to={ROUTES.LOGIN}>
                            <Button type="primary" icon="user" to={ROUTES.LOGIN}>Login</Button>
                        </Link>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}
export default HomeComponents;