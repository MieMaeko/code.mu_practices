let answers = [
	'ответ 1',
	'ответ 2',
	'ответ 3',
];
let button = document.getElementById('button');
let inputs = document.querySelectorAll('input');
button.addEventListener('click',()=>{
        for (let i = 0; i < answers.length; i++) {
            if(inputs[i].value == answers[i]) {
                    if(inputs[i].classList.contains('wrong')){
                        inputs[i].classList.remove('wrong')
                    }
                    inputs[i].classList.add('right')
                  }
                  else {
                    if(inputs[i].classList.contains('right')){
                        inputs[i].classList.remove('right')
                    }
                    inputs[i].classList.add('wrong')
                  }
            }
    
})