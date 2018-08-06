import React from "react";
import { Input } from 'antd';
const { TextArea } = Input;

class Liuyanban extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className='liuyanban'>
				<TextArea rows={4} placeholder='用":"+拼音，看看可以打出什么'/>
				<button>发言</button>
			</div>
		)
	}
}


export default Liuyanban