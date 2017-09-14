import React from 'react';
import ReactDOM from 'react-dom';

import App from './com/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('launchpad'));
registerServiceWorker();
