let answers = [0, 1, 2];
let button = document.getElementById('button')
let blocks = document.querySelectorAll('.block_test')
button.addEventListener('click', () => {
    blocks.forEach((block, index) => {
        let radios = block.querySelectorAll('input')
        let correct = answers[index]
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