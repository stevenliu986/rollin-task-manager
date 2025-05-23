import { Typography } from "antd";
import React from "react";

interface IPrimaryTitleProps extends React.ComponentProps<typeof Typography.Title> {
    children: React.ReactNode;
}

const DEFAULT_STYLE: React.CSSProperties = {
    textTransform: 'uppercase',
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: '-0.1em',
    color: '#252525',
    margin: '0 0 1rem 0',
    fontFamily: 'inherit',
    lineHeight: 1.2,
}

export default function PrimaryTitle({
    children, style, ...props
}: Readonly<IPrimaryTitleProps>) {

    const mergedStyle = { ...DEFAULT_STYLE, ...style };
    return (
        <Typography.Title
            level={1}
            style={mergedStyle}
            {...props}
        >
            {children}
        </Typography.Title>
    );
}