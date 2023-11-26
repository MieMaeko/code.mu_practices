let button = document.querySelector('#button')

let blocks = document.querySelectorAll('.block_test')

button.addEventListener('click', e => {
    blocks.forEach(block => {
        let answers = block.querySelectorAll('input');
        let correct = false
        answers.forEach(answer => {
            if (answer.dataset.right === '' && answer.checked) {
                correct = true
            }
        })

        if (correct) {
            block.classList.add('right')
            block.classList.remove('wrong')
        } else {
            block.classList.remove('right')
            block.classList.add('wrong')
        }
    });
})