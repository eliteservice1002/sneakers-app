import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './less/style.less';
import {enableLogging} from 'mobx-logger';
import App from './app';

import {Provider} from 'mobx-react';
import stores from '~s';

enableLogging();

ReactDom.render(<Provider stores={stores}>
            <App/>
    </Provider>, document.querySelector('#app'));
