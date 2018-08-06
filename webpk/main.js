//入口文件
import React from 'react'
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute,IndexRedirect,Redirect} from 'react-router'

import App from './components/app'
import Demo from './components/demo'
import Home from './components/home'
import About from './components/about'
import Other from './components/other'



import './css/stylesheet.css'

ReactDOM.render(<Router history={hashHistory}>
		<Route path="/" component={Demo}>
//			<IndexRoute component={Home}/>	
//			<IndexRedirect to="/other" />
			<Redirect from="/home" to="/other" />
			<Route path="/home" component={Home}></Route> 
			<Route path="/about" component={About}></Route>
			<Route path="/other" component={Other}></Route> 
		</Route>
	</Router>
	
	,document.getElementById('out'))
