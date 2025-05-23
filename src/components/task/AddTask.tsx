import { Input, Form, DatePicker, Flex } from "antd";
import PrimaryButton from "../button/PrimaryButton";
import PrimaryTitle from '../title/PrimaryTitle';
import calendarIcon from '../../assets/images/calendarIcon.png'

export default function AddTask() {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values)
    };

    return (
        <Flex
            vertical
            style={{
                padding: '1.5rem',
                maxWidth: '100vw',
                height: '100%',
                gap: '2rem',
            }}
        >
            <PrimaryTitle>
                Less juggling, more chill. Add your task and relax.
            </PrimaryTitle>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                style={{ width: '100%' }}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        { required: true, message: 'Please input task name!' }
                    ]}
                >
                    <Input
                        placeholder="Task name"
                        style={{
                            height: '56px',
                            fontSize: '1rem',
                            border: '2px solid #252525',
                            borderRadius: '1rem'
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label="Due date"
                    name="due"
                >
                    <DatePicker
                        style={{
                            width: '100%',
                            height: '56px',
                            fontSize: '1rem',
                            border: '2px solid #252525',
                            borderRadius: '1rem',
                            paddingRight: '40px',
                        }}
                        suffixIcon={
                            <div style={{
                                position: 'absolute',
                                right: -36,
                                top: -17,
                                display: 'flex',
                                alignItems: 'center',
                                borderLeft: '2px solid #252525',
                                height: '56px',
                                width: '56px',
                            }}>
                                <img
                                    src={calendarIcon}
                                    alt="calendar-icon"
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        marginLeft: '17px',
                                    }}
                                />
                            </div>
                        }
                        format="DD/MM/YYYY"
                        allowClear
                    />
                </Form.Item>

                <Form.Item
                    label="Task description"
                    name="description"
                    rules={[
                        { required: true, message: 'Please input task description!' }
                    ]}
                >
                    <Input.TextArea
                        rows={4}
                        placeholder="Your message"
                        style={{ fontSize: '1rem', border: '2px solid #252525', borderRadius: '1rem' }}
                    />
                </Form.Item>

                <Form.Item>
                    <PrimaryButton
                        htmlType="submit"
                        style={{ width: '100%' }}
                    >
                        Create task
                    </PrimaryButton>
                </Form.Item>
            </Form>
        </Flex>
    );
}