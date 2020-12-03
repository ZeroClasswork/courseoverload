import React from 'react'

const Class = ({subject, number, title, type}) => (
    <div>
        <strong>{subject} {number}:</strong>
        {title}
    </div>
);

export default Class;