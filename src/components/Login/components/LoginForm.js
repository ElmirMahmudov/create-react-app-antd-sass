import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
const FormItem = Form.Item;

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.getInputValuesOnSubmit(values);
            }else{
                console.log('validation error');
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                          }, {
                            required: true, message: 'Please input your E-mail!',
                          }],
                        initialValue:'Elmir@gmail.com'
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                        initialValue:'Elmir'
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Row>
                        <Col xs={12} >
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                        </Col>
                        <Col xs={2}></Col>
                        <Col xs={10}>
                            <a className="login-form-forgot" href="">Forgot password</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <Button type="primary" htmlType="submit" className="submit-button">
                                Log in
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        Or <a href="">register now!</a>
                    </Row>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(LoginForm);