import { Button } from 'antd';
import React from 'react';

interface IPrimaryButtonProps extends React.ComponentProps<typeof Button> {
    children: React.ReactNode;
}

const PrimaryButton = ({ children, style, ...props }: IPrimaryButtonProps) => {

    const defaultStyle: React.CSSProperties = {
        width: '100%',
        height: '56px',
        fontSize: '1.5rem',
        fontWeight: 700,
        backgroundColor: '#FF50BE',
        borderRadius: '28px',
    }

    const mergedStyle: React.CSSProperties = { ...defaultStyle, ...style };
    return (
        <Button
            style={mergedStyle}
            {...props}>
            {children}
        </Button>
    );
};

export default PrimaryButton;