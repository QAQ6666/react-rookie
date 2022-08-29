/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-10 08:58:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-29 14:26:41
 * @FilePath: \ant-react\antd-demo\src\pages\login\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from './login.module.css'
import { Layout, Button, Form, Input, Tabs, message } from 'antd';
import React from 'react';
import FormButton from '@/components/formButton';
import CodeInput from '@/components/codeInput';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;


const layoutcss = {
    minHeight: '100%',
    width: '100%'
}
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },

};

export default function Login() {
    let navigate = useNavigate();

    const [form] = Form.useForm();
    const [form2] = Form.useForm();

    const onFinish = (values) => {
        axios.post('/login', values)
        .then(function (response) {
            console.log("response: ", response);
            if(response['statusText']=='OK'){
                navigate("/index", { replace: true });
            }
        })
        .catch(err => console.log(err))

    };

    const onFinish2 = (values) => {
        console.log(values);
    };
    const PhoneValidation = async (v) => {
        try {
            const values = await form2.validateFields(['phone']);
            message.success({
                content: '短信验证码已发送到您的手机！',
                style: {
                    marginTop: '20vh',
                },
            });
            return true;
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
            return false;
        }
    }

    const onFill = () => {
        form.setFieldsValue({
            name: 'luzhihao',
            pwd: 'asdasd',
        });
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    return (
        <Layout style={layoutcss}>
            <Layout>
                <Header
                    className="site-layout-sub-header-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    className={styles.bg}
                >
                    <div className={styles.login_card}>
                        <Tabs type='card' style={{
                            minHeight: '260px'
                        }}>
                            <TabPane tab='用户名登录' key='1'>
                                <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                                    <Form.Item
                                        name="name"
                                        label="Name"
                                        rules={[
                                            {
                                                required: true,
                                                message: '请输入用户名/手机号'
                                            },
                                        ]}
                                    // style={{ borderBottom: '1px solid #DCDCDC' }}
                                    >
                                        <Input placeholder='请输入用户名/手机号' />
                                    </Form.Item>
                                    <Form.Item
                                        name="pwd"
                                        label="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: '请输入密码'
                                            },
                                        ]}
                                    >
                                        <Input.Password placeholder='密码' />
                                    </Form.Item>

                                    <Form.Item {...tailLayout}>

                                        <FormButton form={form}></FormButton>
                                        <Button type="link" htmlType="button" onClick={onFill}>
                                            Fill form
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </TabPane>

                            <TabPane tab='手机号登录' key='2'>
                                <Form {...layout} form={form2} name="codeForm" onFinish={onFinish2}>
                                    <Form.Item
                                        name='phone'
                                        label='Phone'
                                        validateTrigger='onBlur'
                                        rules={[
                                            {
                                                required: true,
                                                label: '手机号',
                                                message: '请输入手机号码'
                                            },
                                            { pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '手机号格式错误！' }

                                        ]}>
                                        <Input placeholder='请输入手机号码'></Input>
                                    </Form.Item>

                                    <CodeInput PhoneValidation={PhoneValidation} />

                                    <Form.Item {...tailLayout}>

                                        <FormButton form={form2}></FormButton>

                                    </Form.Item>
                                </Form>
                            </TabPane>

                        </Tabs>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );

}