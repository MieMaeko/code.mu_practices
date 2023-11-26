let letters = document.querySelectorAll('.letter');
let input = document.querySelector('input');
let del = document.getElementById('backspace');
let caps_lock = document.getElementById('caps_lock');

for(let letter of letters){
	letter.addEventListener('click', function (){
		if (letter.classList.contains('big')){
			input.value += this.textContent.toUpperCase();
		}
		else{
			input.value += this.textContent;
		}
	})
	
}

caps_lock.addEventListener('click',()=>{
	for(let letter of letters){
		letter.classList.toggle('big')
	}
	
})
del.addEventListener('click',()=>{
	input.value = input.value.slice(0,-1)
})

