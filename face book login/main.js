// facebook login

	let form = document.querySelector('form');
	
		form.addEventListener('submit', function(meta){
			
			meta.preventDefault();
			
	let userName = document.querySelector('#username').value;
	
	let passWord = document.querySelector('#password').value;
	
		if(userName == 'null'|| passWord == 'null'){
			
			result.innerHTML = 'please enter your correct user name & password';
			
		}
		
		else{
			output();
		}
		
		function output(){
			
		if(userName == "6383696867" && passWord == "12345"){
			
			window.open("file:///E:/FACE%20BOOK/face%20book%20profile/index.html?");
		}
		
		else{
			result.innerHTML = "please enter your correct user name & password";
		}
		 }
		
		});
		
		let acc=document.getElementByclassName("acc");

	function my(){
		
		window.open("file:///E:/FACE%20BOOK/facebook%20sign%20up/index.html?");
	}
		
		
		localStorage.setItem('facebook',JSON.stringify(form));   // setItem to object into string --- JSON.stringify

		console.log(localStorage.getItem('facebook'));

		let retrieveData = JSON.parse(localStorage.getItem('facebook'))   // get a data from getItem string to object --- JSON.parse

		console.log(retrieveData);	
		
		
		