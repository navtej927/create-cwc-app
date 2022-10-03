import React from 'react';
import './App.scss';

export const App = () => {
    return (
        <div className="container">
            <div>{process.env.APP_NAME} - Application</div>
        </div>
    );
};
