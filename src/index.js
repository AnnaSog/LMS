import React from 'react';
import ReactDOM from 'react-dom/client';
import Service from './services/Service';

import App from './App';

// const service = new Service();
// service.getAllUsers().then(res => console.log(res.name))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>

);
