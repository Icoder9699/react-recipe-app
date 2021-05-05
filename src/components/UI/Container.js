import React from 'react'

export default function Container(props) {
    return (
        <div style={{
            maxWidth: '1100px',
            padding: '0 10px',
            margin: '70px auto 0 auto'
        }}>
            {props.children}
        </div>
    )
}
