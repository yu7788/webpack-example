import React from "react";

class Candan extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className='caidan'>
				<div className='shang'>
					<div className='nick'>
						<p>手机用户{window.sessionStorage.getItem("用户昵称")}创建的菜单</p>
						<p>手机用户{window.sessionStorage.getItem("用户昵称")}收藏的菜单</p>
					</div>
					<button>创建一个菜单</button>
				</div>
				<div className='xia'>我的收藏(0)</div>
			</div>
		)
	}
}


export default Candan