import React, { Component } from 'react';		//引入React.Component
import  $ from  'jquery'						//引入jquery
import 'bootstrap/dist/css/bootstrap.min.css'	//引入bootstrap样式
//import 'bootstrap/dist/js/bootstrap.min.js'	//引入bootstrapjs会报错
import { Button } from 'antd';					//引入antd
import 'antd/dist/antd.css';					//引入antd样式
import '../css/register.css';
import ReactDOM from 'react-dom';				//引入react-dom
import Jigsaw from './jigsaw.js';
import '../css/jigsaw.css'


class App extends Component {
	constructor(props){
		super(props)
		this.state={
			num:0,
			pass:0,
			shouji:0,
			str:''
		}
	}
	denglu(){
		console.log("在这里是要实现登录的")
		this.props.history.push('/login')
	}
	haoma(){
		var str=/^1[3|4|5|8][0-9]\d{4,8}$/;
		var shoujihao=str.test(this.refs.tel.value)
		if(shoujihao==true){
			this.setState({shouji:1})
		}
		
	}
	mima(){
		var len=this.refs.pass.value.length;
//		console.log(this.refs.pass.value.length);
		if(len>6&&len<12){
			this.setState({pass:1})
//			alert('zhelige')
		}
	}
	tag(){
		//console.log(this.state.num,this.state.shouji,this.state.pass)
		if(this.state.num===1&&this.state.shouji===1&&this.state.pass===1){
			console.log(this.refs.tel.value);
			var _this=this;
			$.ajax({
				type:"post",
				url:"http://localhost:8000/reg",
				data:{phonenum:_this.refs.tel.value,id:'1'},
				async:true,
				success:function(data){
					console.log(data)
				}
			});
		}else{
			alert("手机号码格式不正确或者密码格式不正确，请重新填写");
			this.refs.tel.value='';
			this.refs.pass.value='';
		}
	}
	zhuce(){
		var _this=this
		console.log(this.refs.tel.value,this.refs.code.value)
		$.ajax({
			type:"post",
			url:"http://localhost:8000/reg",
			data:{phonenum:_this.refs.tel.value,yzm:_this.refs.code.value,password:_this.refs.pass.value,id:'2'},
			success:function(data){
				if(data==0){
					//alert('该用户已经被注册，请注册其他手机号');
					_this.setState({str:'该用户已经被注册，请注册其他手机号'})
//					_this.props.history.push('/login')
					_this.refs.tel.value='';
					_this.refs.pass='';
				}else if(data==1){
					alert("注册成功");
					_this.props.history.push('/login')
				}else{
					//alert('验证码错误，请重新填写')
					_this.setState({str:'验证码错误'})
				}
				
			}
		});
	}
  render() {
    return (
      <div className="App">
        <div className='header'>
        	<div className='left'><p style={{color:"#8BCFDB"}}>下</p><p style={{color:"#DF2C2A"}}>厨</p><p style={{color:"#F7815A"}}>房</p></div>
        	<div className='right'><p>已经有账号?</p><p className='register' onClick={this.denglu.bind(this)}>登录</p></div>
        </div>
        
        <div className='content'>
        	<h3>注册一个新的账号</h3>
        	<h6 style={{background:'red',color:'white',margin:'0 20%'}}>{this.state.str}</h6>
	        <form>
	        	<div>
	        		<label htmlFor='tel'>手机号:</label>
	        		<input ref='tel' type='text' onBlur={this.haoma.bind(this)} />
	        	</div>
	        	
	        	<div>
	        		<label htmlFor='pass'>密码:</label>
	        		<input ref='pass' type='password' onBlur={this.mima.bind(this)} ref='pass'/>
	        	</div>
	        		
	        	
	        	<div className='tupiancode'>
	        		<div id="captcha" style={{position:"relative",width:300}}></div>
	        	</div>
	        	
 				<div>
 					<label htmlFor='code'>短信验证码验证:</label>
	        		<input ref='code' type='text' />
	        		<Button type="Dashed" onClick={this.tag.bind(this)}>获取短信验证码</Button>
 				</div>
 				
	        	<Button type="danger" className='btn' onClick={this.zhuce.bind(this)}>注册</Button>
	  			
	        </form>
        </div> 
      </div>
    ); 
  }
  componentDidMount(){
  	var _this=this
  	Jigsaw.init(document.getElementById('captcha'), function () {
	    alert('图片验证成功')
	    _this.setState({num:1})
//	    console.log(_this.state.num)
	  })
 	}
  
}


export default App;
 