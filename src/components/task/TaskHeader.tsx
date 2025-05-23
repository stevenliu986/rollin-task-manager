import { Button } from "antd";
import leadingIcon from '../../assets/images/Leading Icon.png'

export default function TaskHeader() {

    return (<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>

        <Button
            type="default"
            size="small"
            style={{
                backgroundColor: '#196BE5',
                border: '#196BE5',
                borderRadius: '25px',
                padding: '0 8px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <span style={{ fontSize: '0.875rem', color: '#FFF' }}>
                In Progress
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
                01/05
            </span>
        </Button>
    </div>)
}