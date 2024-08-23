import React from 'react'

export default function Info() {
    let title = {
        padding: '1rem',
        flex: 1,
    }
    let content={
        boxShadow:'0px 0px 8px rgba(0,0,0,0.7)',
        width:'320px',
        padding:'2rem',
        borderRadius:'4px'
    }
    return (
        <div style={title}>
            <div className="content" style={content}>
                <h1 style={{ fontSize: '1.4rem',fontWeight:'bold' }}>Title</h1>
                <p>Info</p>
            </div>
        </div>
    )
}
