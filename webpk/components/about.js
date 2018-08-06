import React from 'react';

class About extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				about
			</div>
		)
	}
	
	componentDidMount(){
		console.log(this.props.location.query)
	}
	
}


export default About;