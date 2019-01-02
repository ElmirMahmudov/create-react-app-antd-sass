import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const MyContent = (props) => {
    return (
        <Content className="content">
            {props.children}
        </Content>
    )
}
export default MyContent;