import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import state from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App inboxState={state} />
    </BrowserRouter>
);

export let loadPage = () => {
    root.render(
        <BrowserRouter>
            <App inboxState={state} />
        </BrowserRouter>
    );
}