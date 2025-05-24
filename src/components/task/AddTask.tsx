import { Input, Form, DatePicker, Flex } from "antd";
import PrimaryButton from "../button/PrimaryButton";
import PrimaryTitle from '../title/PrimaryTitle';
import calendarIcon from '../../assets/images/calendarIcon.png'
import { useNavigate } from "react-router";
import { post } from '../../utils/httpClient'
import dayjs from 'dayjs';

export interface ICreateTask {
    title: string;
    description: string;
    complete: boolean;
    created: string;
    due?: string;
}

const FORM_ITEM_STYLE: React.CSSProperties = {
    height: '56px',
    fontSize: '1rem',
    border: '2px solid #252525',
    borderRadius: '1rem'
};

const TEXTAREA_STYLE = {
    ...FORM_ITEM_STYLE,
    rows: 4
};

const CALENDAR_ICON_STYLE: React.CSSProperties = {
    position: 'absolute',
    right: -36,
    top: -17,
    display: 'flex',
    alignItems: 'center',
    borderLeft: '2px solid #252525',
    height: '56px',
    width: '56px',
};

const ICON_IMAGE_STYLE: React.CSSProperties = {
    width: '24px',
    height: '24px',
    marginLeft: '17px',
};

const formatTaskData = (values: ICreateTask): ICreateTask => ({
    created: dayjs().format('DD/MM/YYYY'),
    title: values.title,
    description: values.description,
    complete: false,
    ...(values.due && { due: dayjs(values.due).format('DD/MM/YYYY') })
});

export default function AddTask() {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values: ICreateTask) => {

        try {
            const taskData = formatTaskData(values);
            await post('/tasks', taskData);
            navigate('/tasks');
        } catch (error) {
            console.error('Error creating task:', error);
        }
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
                        style={FORM_ITEM_STYLE}
                    />
                </Form.Item>

                <Form.Item
                    label="Due date"
                    name="due"
                >
                    <DatePicker
                        style={{
                            ...FORM_ITEM_STYLE,
                            paddingRight: '40px',
                            width: '100%'
                        }}
                        suffixIcon={
                            <div style={CALENDAR_ICON_STYLE}>
                                <img
                                    src={calendarIcon}
                                    alt="calendar-icon"
                                    style={ICON_IMAGE_STYLE}
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
                        style={TEXTAREA_STYLE}
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