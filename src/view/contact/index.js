import React from 'react';
import './style.css'
import img2 from '../../assets/2.webp'
import { Button, Form, Input,ConfigProvider } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        Email: '${label} is not a valid Email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};
const App = () => {

    return (
        <div className='contact_box'>
            <img src={img2} />
            <h1>Contact Us</h1>
            <p>
                Discover the captivating world of art at our upcoming exhibition! Showcasing a diverse array of masterpieces, our gallery invites you to embark on a visual journey. Stay connected with us for updates, exclusive sneak peeks, and to book your personal viewing experience. Join our community and be inspired by the beauty of art. Connect with us now to embark on this artistic adventure!

            </p>
            <ConfigProvider
                theme={{
                    components: {
                        Form: {
                            labelFontSize:30,
                            itemMarginBottom:100
                        },
                        Button: {
                            defaultHoverColor: 'rgb(166, 25, 46)',
                            defaultHoverBorderColor: 'rgb(166, 25, 46)',
                            defaultGhostBorderColor: '#333',
                            defaultGhostColor: '#333'

                        },
                    },
                }}
            >
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{
                        width:'80%',
                    }}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name={['user', 'Name']}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'Email']}
                        label="Email"

                        rules={[
                            {
                                type: 'Email',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name={['user', 'Address']} label="Address">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'Message']} label="Message">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                        }}
                    >
                        
                        <Button  ghost htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item>
                </Form>
            </ConfigProvider>


        </div>
    );
};


export default App;