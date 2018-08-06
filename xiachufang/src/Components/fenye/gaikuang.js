import React from "react";
import { Input } from 'antd';
const Search = Input.Search;

class Gaikunag extends React.Component{
	constructor(props){
		super(props) 
		this.state={
			flg:true,
		}
	}
	render(){
		return(
			<div>
				{this.state.flg ? 
					<div className='gaikuang' >
						<h4>手机用户{window.sessionStorage.getItem("用户昵称")}用户的收藏</h4>
						这里是要填充数据的
					</div>
			 : 
					<div className='gaikuang'>
						<div>
							<h4>夜观天象,传说一只未来大厨从这里启程...</h4>
							<p>找到你会做得菜,传上你的作品</p>
							<p>找不到?你可以创造菜谱,亮出你的独门绝技</p>					 
							<Search
							    placeholder=""
							    enterButton="搜菜谱"
							    size="small"
							    onSearch={value => console.log(value)}
							    style={{width:300,border:"none"}}
							/>
							
						</div>
					</div>
					
			}
			</div>
			
		)
	}
	componentDidMount(){
		console.log(this.props.location.query)
		if(this.props.location.query){
			console.log('这里有query')
			//console.log(this.props.location.query.id[0].collection)
			this.setState({flg:true})
//			if(this.props.location.query.id[0].collection){
//				console.log("这里有收藏的东西")
//				
//				
//			}else{
//				this.setState({flg:false})
//			}
		}else{
			console.log('这里mei有query')
			this.setState({flg:false})
		}
		
	
	}
}


export default Gaikunag