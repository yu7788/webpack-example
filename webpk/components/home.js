import React from 'react';
import urls from '../img/a.jpg'


class Home extends React.Component{
	constructor(props){
		super(props)
	}
	
	tap(){
		console.log('hello')
	}
	render(){
		return(
			<div>
				<h2 className="tit">home 组件</h2>
				<button onClick={this.tap}>事件</button>
				<img src={urls} />
			</div>
		)
	}
}


export default Home;