
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:[]
		}
	}
	
	tap(){
		var arr=this.state.arr
		arr.push(this.refs.ipt.value)
		this.setState({arr:arr})
		this.refs.ipt.value=''
	}
	
	del(i){
		var arr1=this.state.arr;
		arr1.splice(i,1)
		this.setState({arr:arr1})
	}
	
	
	render(){
		var _this=this;

		
		var jsx=[];
		this.state.arr.map(function(item,i){
			jsx.push(<div>{item}---<button onClick={_this.del.bind(_this,i)}>删除</button></div>)
		})
//		console.log(this.state.arr)
		return(
			<div>
				<h1>TODOLIST</h1>
				<input type="text" ref="ipt"/>
				<button onClick={this.tap.bind(this)}>添加</button>
				
				<hr/>
				
				 <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
				
				{jsx}
				
				</ReactCSSTransitionGroup>
				
			</div>
		)
	}
}

export default App;