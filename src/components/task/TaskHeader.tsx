import { Button } from "antd";
import leadingIcon from '../../assets/images/Leading Icon.png'
import type { ITask } from "./AddTask";

interface ITaskHeaderProps {
    taskDetail: ITask;
}

export default function TaskHeader({ taskDetail }: Readonly<ITaskHeaderProps>) {
    const due = taskDetail.due?.slice(0, -5)

    return (<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>

        <Button
            type="default"
            size="small"
            style={{
                backgroundColor: taskDetail.complete ? '#11a436' : '#196BE5',
                border: `1px solid ${taskDetail.complete ? '#11a436' : '#196BE5'}`,
                borderRadius: '25px',
                padding: '0 8px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <span style={{ fontSize: '0.875rem', color: '#FFF' }}>
                {taskDetail.complete ? 'Completed' : 'In Progress'}
            </span>
        </Button>
        <Button
            type="default"
            size="small"
            style={{
                backgroundColor: '#F5F5F5',
                borderRadius: '25px',
                padding: '0 8px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <img src={leadingIcon} alt="leading-icon" />
            <span style={{ fontSize: '0.875rem' }}>
                {due}
            </span>
        </Button>
    </div>)
}