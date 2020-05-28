import React, { useEffect, useState } from 'react';

export const IndexTemplate = (data) => {
    const [content, setContent] = useState({});

    useEffect(() => {
        setContent(data.data);
    }, data);

    return (
        <>
            <h1>{content.heading}</h1>
            <p>{content.text}</p>
        </>
    );
};
