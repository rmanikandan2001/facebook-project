// like count Js

	let thumbs = document.querySelector(".thumbs"); 
	
	let result = document.querySelector(".result");
	
	let count = 0;
	
	thumbs.addEventListener('click',function(f){
		
		
		count++;
		
		if(count == 1){
			
			result.innerText ="Like "+count;
		
			result.innerText.color = "blue";
		}
		else{
			
			result.innerText ="Likes "+count;
		
			result.innerText.color = "blue";
		}
	});
	
	
	
// comment to do list Js

	let form = document.getElementById("form");
	
	let input = document.getElementById("input");
	
	let posts = document.getElementById("posts");
	
	form.addEventListener('submit',function(e){
		
		e.preventDefault();
		
		readPost();
		
	})
	
	let data = {};
	
		function readPost(){
			
			data['text'] = input.value;
			
			// console.log(data);
			
			createPost();
			
		}
		
		function createPost(e){
			
			posts.innerHTML += `<div>
			
				<p>${data.text}</p>
				
				<span>
				
				<i onClick="editPost(this)" class="bi bi-pencil-square"></i>
				
				<i onClick="deletePost(this)" class="bi bi-trash"></i>
				
				</span>
				
			</div>`
			
			input.value = ' ';
			
			 //console.log(posts);
			
			// editPost();
			
		}
		
		function editPost(e){
			
			input.value = e.parentElement.previousElementSibling.innerHTML;
			
			e.parentElement.parentElement.remove();
			
		}
		
		function deletePost(e){
			
			e.parentElement.parentElement.remove();
			
		}
		
		let chat = document.getElementById("chat");
		
		chat.addEventListener('click',function(){
			
			
			
		});
		
		
		
// share 

	var modal = document.getElementById("modal");
	
	var move = document.getElementById("move");
	
	var span = document.getElementsByClassName("close");
	
	move.onclick = function(d){
		
		d.preventDefault();
		
		modal.style.display = "block";
		
	}
	
	span.onclick = function(){
		
		modal.style.display = "none";
		
	}
	
	window.onclick = function(d){
		
		if (d.target == modal){
			
			modal.style.display = "none";
			
		}
		
	}
	
	
	
	// localStorage.setItem('facebookfeed',JSON.stringify(restaurant));   // setItem to object into string --- JSON.stringify

	// console.log(localStorage.getItem('facebookfeed'));

	// let retrieveData = JSON.parse(localStorage.getItem('facebookfeed'))   // get a data from getItem string to object --- JSON.parse

	// console.log(retrieveData);