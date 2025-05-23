import { Flex, Typography } from "antd";
import type { ITask } from "./AddTask";

const { Title, Paragraph } = Typography;

interface ITaskDetailProps {
    taskDetail: ITask,
}

const TaskDetail: React.FC<ITaskDetailProps> = ({ taskDetail }) => {

    return (<Flex
        vertical
        justify='center'
        style={{
            width: '230px',
            height: '63px',
        }}
    >
        <Title
            level={4}
            style={{
                margin: 0,
                color: '#FFF',
                fontSize: '1rem',
                fontWeight: 600,
                flex: 1,
                textDecoration: taskDetail.complete ? 'line-through' : 'none',
                opacity: taskDetail.complete ? 0.7 : 1
            }}
        >
            {taskDetail.title}
        </Title>
        <Paragraph
            type="secondary"
            style={{
                marginBottom: '24px',
                color: '#FFF',
                fontSize: '0.875rem',
                fontWeight: 400,
                textDecoration: taskDetail.complete ? 'line-through' : 'none',
                opacity: taskDetail.complete ? 0.7 : 1,
            }}
        >
            {taskDetail.description}
        </Paragraph>
    </Flex>)
}

export default TaskDetail;
