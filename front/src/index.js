// @packages
import React from 'react';
import ReactDOM from 'react-dom';

// @scripts
import AppContainer from './containers/app';
import { getElementById } from './util';

// @styles
import './styles/site.css';

// @fonts
import './fonts/Graphik-Black-Web.ttf';
import './fonts/Graphik-Bold-Web.ttf';
import './fonts/Graphik-Medium-Web.ttf';
import './fonts/Graphik-Regular-Web.ttf';
import './fonts/Graphik-RegularItalic-Web.ttf';

ReactDOM.render(
    <AppContainer />,
    getElementById('root')
);
