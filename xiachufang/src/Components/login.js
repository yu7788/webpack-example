import React from "react"
import '../css/login.css'
import '../css/common.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jigsaw from './jigsaw.js';
import '../css/jigsaw.css'
import $ from 'jquery'
import Action from "../store/action";
import Store from "../store/store"

class Login extends React.Component{
	constructor(props){
		super(props)
		this.state={
			tupian:0,
			str:"",
			name:'用户昵称'
		}
	}
	tag(){
		var str=/^1[3|4|5|8][0-9]\d{4,8}$/;
		var shoujihao=str.test(this.refs.tel.value)
		if(shoujihao==true){
			console.log(this.refs.tel.value);
		}else{
			alert('您填写的手机号码格式不正确，请正确填写')
			this.refs.tel.value=''
		}
	}
	flg(){
		
		var _this=this
		if(this.state.tupian===1){
			$.ajax({
				type:"post",
				url:"http://localhost:8000/login",
				data:{phonenum:_this.refs.tel.value,id:1},
				success:function(data){
					console.log(data)
				}
			});
		}else{
			alert("请正确验证上述图片")
		}
	}
	denglu(){
		var _this=this
		console.log(_this.refs.tel.value,_this.refs.pass.value,_this.refs.yzm.value)
		$.ajax({
				type:"post",
				url:"http://localhost:8000/login",
				data:{phonenum:_this.refs.tel.value,password:_this.refs.pass.value,yzm:_this.refs.yzm.value,id:2},
				success:function(data){
					console.log(data)
					if(data==1){
						alert('登录成功')
						Store.dispatch(Action(_this.refs.tel.value))
						window.sessionStorage.setItem(_this.state.name,_this.refs.tel.value)
						_this.props.history.push('/my')
						
					}else if(data==0){
						alert('账号和密码错误');
						_this.setState({str:'账户和密码错误'})
						_this.refs.tel.value="";
						_this.refs.pass.value="";
						_this.refs.yzm.value=""
					}else{
						alert('验证码错误')
						_this.refs.yzm.value=""
						_this.setState({str:'验证码错误'});
						
					}
					
				}
			})
	}
	zhuce(){
		console.log()
		this.props.history.push('/register')
	}
	render(){
		return(
			<div className='login'>
				<div className='header'>
	        		<div className='left'><p style={{color:"#8BCFDB"}}>下</p><p style={{color:"#DF2C2A"}}>厨</p><p style={{color:"#F7815A"}}>房</p></div>
	        		<div className='right'><p>没有账号?</p><p className='register' onClick={this.zhuce.bind(this)}>注册</p></div>
       			</div>
       			<div className='content'>
       				<h2>经常登录的同志是好同志</h2>
       				<h6 style={{background:'red',color:'white'}}>{this.state.str}</h6>
       				<div className='sec' >
       					<div className='left'>
       						<div className='qq'><p className='iconfont'>&#xe61e;</p><p>QQ账号登录</p></div>
       						<div className='lang'><p className='iconfont'>&#xe603;</p><p>新浪微博登录</p></div>
       						<div className='ban'><p className='iconfont'>&#xe60e;</p><p>豆瓣账号登录</p></div>
       					
       					
       					
       					</div>
       					<div className='right'>
       						<form style={{padding:0}}>
							  <div className="form-group" style={{display:'flex'}}>
							    <label htmlFor="exampleInputEmail1">手机号</label>
							    <input type="text" className="form-control" id="exampleInputEmail1" ref='tel' onBlur={this.tag.bind(this)}/>
							  </div>
							  <div className="form-group" style={{display:'flex'}}>
							    <label htmlFor="exampleInputEmail1">密码</label>
							    <input type="password" className="form-control" id="exampleInputEmail1" ref='pass' onBlur={this.tag.bind(this)}/>
							  </div>
							  <div className="form-group">
							    <div id="captcha" style={{position:"relative",width:300}}></div>
							  </div>
							  <div className="form-group" style={{display:'flex'}}>
							    <label htmlFor="exampleInputPassword1">验证码</label>
							    <input type="text" className="form-control" id="exampleInputPassword1" ref='yzm'/>
							    <button type="button" className="btn btn-info fasong" onClick={this.flg.bind(this)}>发送手机验证码</button>
							  </div>
							  <button  type="button" className="btn btn-danger" style={{width:200}}  onClick={this.denglu.bind(this)}>登录</button>
							</form>
       					</div>
       				</div>
       			</div>
			</div>
		)
	}
	componentDidMount(){
  	var _this=this
  	Jigsaw.init(document.getElementById('captcha'), function () {
	    alert('图片验证成功')
	    _this.setState({tupian:1})
	    console.log(_this.state.tupian)
	  })
 	}
}
export default Login