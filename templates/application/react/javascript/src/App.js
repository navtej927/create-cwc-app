import React from 'react';
import './App.scss';

const App = () => {
    return (
        <React.StrictMode>
            <div className="container">
                <div>{process.env.APP_NAME} APPLICATION</div>
            </div>
        </React.StrictMode>
    );
};

export { App };
