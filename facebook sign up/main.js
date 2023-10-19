
	let signup=document.getElementById("btn");
	
	let datas=[];
	
	btn.onclick=function(){
	
	let userName=document.getElementById("userName").value;
	
	let passWord=document.getElementById("passWord").value;
	
	let datas={
	
	
	userName:userName,
	passWord:passWord,
	
	}
	
	datas.push(data);
	
	localStorage.setItem('user',JSON.stringify(datas));
	
	}