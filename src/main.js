import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import 'bootstrap/dist/css/bootstrap.min.css';

import './less/style.less';


import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'




import {Provider} from 'mobx-react';
import stores from '~s';

ReactDom.render(<Provider stores={stores}>
            <App/>
    </Provider>, document.querySelector('#app'));