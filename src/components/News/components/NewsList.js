import React from "react";
import { List } from "antd";
const NewsList = (props) => {

    return (
        <List
            itemLayout="horizontal"
            dataSource={props.posts}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={item.title}
                        description={item.body}
                    />
                </List.Item>
            )}
        />
    )
}
export default NewsList;