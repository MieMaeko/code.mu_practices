let answers = [
	'ответ 1',
	'ответ 2',
	'ответ 3',
];
let questions = [
	'вопрос 1?',
	'вопрос 2?',
	'вопрос 3?'
];
let div = document.getElementById('test');
let button = document.getElementById('button')
for(let q of questions) {

    let input = document.createElement('input');
    let p = document.createElement('p');
    p.textContent = q;
    div.appendChild(p);
    div.appendChild(input)
    
}
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