import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Components/register';
import Login from "./Components/login";
import My from "./Components/my";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'




ReactDOM.render(<Router>
	<div>
		<Switch>
			<Route path='/register' component={Register}></Route>
			<Route path='/login' component={Login}></Route>
			<Route path='/my' component={My}></Route>
			<Redirect to='/my'/>
		</Switch>
		
	</div>
	
</Router>, document.getElementById('root'));
registerServiceWorker();
