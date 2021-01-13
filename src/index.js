import React from 'react';
import ReactDOM from 'react-dom';
import { TweetProvider } from "./components/Tweet/TweetProvider"
import App from './components/App';
const rootElement = document.getElementById("root");
ReactDOM.render(<TweetProvider><App /></TweetProvider>, rootElement);
