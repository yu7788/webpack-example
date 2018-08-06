const Action=function(text){
	console.log(text)
	return{
		type:'ADD_TODO',
		text:text
	}
}



export default Action;