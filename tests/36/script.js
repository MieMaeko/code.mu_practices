let questions = [
	{
		text: 'вопрос 1?',
		right: 0,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 2?',
		right: 1,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 3?',
		right: 2,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
];


let div = document.getElementById('test');
let button = document.getElementById('button');
let counter = 1;
for (let question of questions) {
    let block = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = question['text'];
    block.appendChild(p);

    for (let variant of question['variants']) {
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = counter;
        let span = document.createElement('span');
        span.textContent = variant
        label.appendChild(input)
        label.appendChild(span)

        block.appendChild(label)        
    }
    counter++;
    div.appendChild(block);
}

let blocks= document.querySelectorAll('#test > div')
button.addEventListener('click', () => {
    blocks.forEach((block, index) => {
        let radios = block.querySelectorAll('input')
        let correct = questions[index].right;
        let isItRight = false
        radios.forEach((radio, index) => {
            if (index === correct && radio.checked) {
                isItRight = true
            }
        });

        if (isItRight) {
            block.classList.add('right')
            block.classList.remove('wrong')
        } else {
            block.classList.remove('right')
            block.classList.add('wrong')
        }
    });
})
