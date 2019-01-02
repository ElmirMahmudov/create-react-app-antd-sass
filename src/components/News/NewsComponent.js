import React from 'react';
import NewsList from './components/NewsList';
import { Row, Col, Layout } from 'antd'
import MyHeader from '../Reuseable/Header';
import MyContent from '../Reuseable/Content';

const NewsComponent = (props) => {
    
    return (
        <Layout>
            <MyHeader/>
            <MyContent>
                <Row>
                    <Col xs={8}>
                    </Col>
                    <Col xs={8}>
                        <h1>
                            News
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} sm={4} md={6} lg={8}>
                    </Col>
                    <Col xs={20} sm={16} md={12} lg={8}>
                        <NewsList posts={props.posts}/>
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8}>
                    </Col>
                </Row>
            </MyContent>
        </Layout>
    )
}
export default NewsComponent;