import React from "react"
import Store from '../store/store.js'
import {BrowserRouter as Router,Route,Redirect,Switch,Link} from 'react-router-dom'
import '../css/my.css'
import Caipu from './fenye/caipu'
import Candan from './fenye/candan'
import Caogaoxiang from './fenye/caogaoxiang'
import Gaikuang from './fenye/gaikuang'
import Liuyanban from './fenye/liuyanban'
import Zuopin from './fenye/zuopin'
import $ from 'jquery'

class Login extends React.Component{
	constructor(props){
		super(props)
		this.state={
			data:[],
			detail:[],
			arr:Store.getState()
		}
		this.onchanges=this.onchanges.bind(this)
	}
	onchanges(){
		this.setState({arr:Store.getState()})
	}
	componentDidMount(){
		Store.subscribe(this.onchanges)
		console.log(this.state.arr)
	}
	render(){
		return(
			
			<div className='my'>
				
				<div className='my-container'>
					<div className='shang'>
						<div className="zuo">
							<p>有头像</p>
							<p>更礼貌</p>
						</div>
						<div className="zhong">
							<h2>手机用户{window.sessionStorage.getItem("用户昵称")}的厨房</h2>
						</div >
						<div className="you">
							<button>设置个人信息</button>
							<div className='down'>
								<p>
									<em>关注的人</em>
									<i>0</i>
								</p>
								<p >
									<em>被关注</em>
									<i>0</i>
								</p>
							</div>
						</div>
					</div>
					<div className='xia'>
						<Router>
							<div>
								<div className='nav'>
									<div className='left' >
									{this.state.data.phonenum}
										<ul>
											<Link to={{pathname:'/my/gaikuang',query:{id:this.state.data}}}>概况</Link>
											<Link to='/my/caipu'>菜谱0</Link>
											<Link to='/my/zuopin'>作品0</Link>
											<Link to='/mycandan' >菜单</Link>
											<Link to='/my/liuyanban'>留言板</Link>
										</ul>
									</div>
									 <div className='right'>
										<ul>
											<Link to='/my/caogaoxiang'>草稿箱</Link>
											<a>收藏</a>
										</ul>
									</div>
								</div>
								<div className='collection' >
									<Switch>
										<Route path='/my/gaikuang' component={Gaikuang} ></Route>
										<Route path='/my/caipu' component={Caipu}></Route>
										<Route path='/my/zuopin' component={Zuopin}></Route>
										<Route path='/mycandan' component={Candan}></Route>
										<Route path='/my/liuyanban' component={Liuyanban}></Route>
										<Route path='/my/caogaoxiang' component={Caogaoxiang}></Route>
										<Redirect to='/my/gaikuang'/>
									</Switch>
								</div>
							</div>
						</Router>
					</div>
				</div>
				
			</div>
		)
	}
	componentWillMount(){
		var _this=this
		$.ajax({
			type:"get",
			url:"http://10.8.161.38:8000/showDetail",
			success:function(data){
				//console.log(data)
				_this.setState({detail:data})
				console.log(_this.state.detail)
			}
		});
		$.ajax({
			type:"get",
			url:"http://localhost:8000/data?phonenum="+window.sessionStorage.用户昵称,
			success:function(data){
				//console.log(data)
				_this.setState({data:data})
				//console.log(_this.state.data)
			}
		});
//		$.ajax({
//			type:"get",
//			url:"http://localhost:8000/detail,
//			success:function(data){
//				_this.setState({detail:data})
//				console.log(data)
//			}
//		});
	}
	
}
export default Login