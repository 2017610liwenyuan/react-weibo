import React,{Component} from 'react';

import { render } from 'react-dom';

import { Router, Route, IndexRoute, Link, browserHistory,hashHistory,IndexLink } from 'react-router'

import App from './components/App';
import './common/main.css';

import Home from './components/Home';
import Lists from './components/Lists';
import Find from './components/Find';
import Me from './components/Me';
import Bianji from './bianji/Bianji';
var router=
   <Router history={browserHistory}>
       <Route path="/" component={App}>
           <IndexRoute component={Home}/>
           <Route path="/home" component={Home} />
           <Route path="/list" component={Lists} />
           <Route path="/find" component={Find} />
           <Route path="/me" component={Me} />
       </Route>
       <Route path="/bianji" component={Bianji} />
    </Router>
    
    
render((
router
), document.getElementById('root'))
