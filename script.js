//your code here
const input = document.getElementById('evaluatedText');
const head = document.getElementById('letterCount');
let count = 0;
input.addEventListener('input' ,()=> {
	++count;
	head.innerText = count;
	
})