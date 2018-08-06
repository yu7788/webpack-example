import React from "react";

class Caipu extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className='caipu'>
				<button>创建自己的菜谱</button>
				<p>您还没有创建自己的菜谱,快和厨友们分享你的菜谱把</p>
			</div>
		)
	}
}


export default Caipu