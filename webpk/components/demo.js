
import React from 'react';
import {Link} from 'react-router';

const active={color:'red'}

class Demo extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<h1>路由</h1>
			
				<Link to="/home" activeStyle={active}>首页</Link>	
				<Link to={{pathname:"/about",query:{id:2}}} activeStyle={active}>关于</Link>	
				<Link to="/other" activeStyle={active}>其他</Link>	
				
				<hr/>
				
				<div>
					{this.props.children}
				</div>
			
			</div>
		)
	}
}

export default Demo;