//1
// let div = document.getElementById('test');
// let questions = {
// 	'Вопрос 1?': 'ответ 1',
// 	'Вопрос 2?': 'ответ 2',
// 	'Вопрос 3?': 'ответ 3',
// }
// for(let q in questions) {
//     let p = document.createElement('p');
//     p.textContent = q;
//     let input = document.createElement('input');
//     input.addEventListener('keypress', function(event) {
//         if (event.key == 'Enter') {
//             if(input.value == questions[q]) {
//                 if(input.classList.contains('wrong')){
//                     input.classList.remove('wrong')
//                 }
//                 input.classList.add('right')
//             }
//             else {
//                 if(input.classList.contains('right')){
//                     input.classList.remove('right')
//                 }
//                 input.classList.add('wrong')
//               }
//         }
//      })
//     div.appendChild(p);
//     div.appendChild(input)
// }

//2
let questions = [
	{
		text:  'вопрос 1?',
		right: 'ответ 1',
	},
	{
		text:  'вопрос 2?',
		right: 'ответ 2',
	},
	{
		text:  'вопрос 3?',
		right: 'ответ 3',
	},
];
let div = document.getElementById('test');
let button = document.getElementById('button')

for (let q of questions) {
    let p = document.createElement('p')
    p.textContent = q['text']
    let input = document.createElement('input')
    div.appendChild(p)
    div.appendChild(input)

}
button.addEventListener('click',()=>{
    let inputs = document.querySelectorAll('input');
    let i = 0
        for (let q of questions) {
        if(inputs[i].value == q['right']) {
            if(inputs[i].classList.contains('wrong')){
                inputs[i].classList.remove('wrong')
                }
            inputs[i].classList.add('right')
        }
        else{
            if(inputs[i].classList.contains('right')){
                inputs[i].classList.remove('right')
                }
            inputs[i].classList.add('wrong')
        }
        i++;
        }
    
})

