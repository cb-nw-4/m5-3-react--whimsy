import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { TweetProvider } from "./components/TweetContext.js";

ReactDOM.render(
    <TweetProvider>
        <App />
    </TweetProvider>
    , document.getElementById('root'));
