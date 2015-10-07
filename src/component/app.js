'use babel';

import React from 'react';
import Main from './main/Main.js';

var remote = window.require('remote');

window.React = React;

React.render(<Main />, document.body);
