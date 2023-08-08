import React, { useState } from 'react';

function CreateTodoButton() {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '18px',
        backgroundColor: isHovered ? '#45a049' : '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s, transform 0.2s',
        marginLeft : '25px',
    };

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleHoverOut = () => {
        setIsHovered(false);
    };

    return (
        <button
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
        >
            +
        </button>
    );
}

export { CreateTodoButton };
