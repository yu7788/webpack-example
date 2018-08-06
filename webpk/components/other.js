import React from 'react';
import {hashHistory} from 'react-router'
class Other extends React.Component{
	constructor(props){
		super(props)
	}
	
	
	tap(){
		hashHistory.push('/home')
//		location.href='/home'
	}
	
	render(){
		return(
			<div>
				Other
				<button onClick={this.tap.bind(this)}>跳转到home</button>
				
			</div>
		)
	}
}


export default Other;