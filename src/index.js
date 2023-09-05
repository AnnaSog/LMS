import React from 'react';
import ReactDOM from 'react-dom/client';
import useService from './services/Service';

import App from './App';

// const {gelAllLessons} = useService();
// // gelAllLessons().then(res => console.log(res))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>

);
