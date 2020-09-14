import 'core-js/es6/map';
import 'core-js/es6/set';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';

bridge.send('VKWebAppInit', {});

ReactDOM.render(<App />, document.getElementById('root'));
import ("./eruda").then(({default: eruda}) => {});
