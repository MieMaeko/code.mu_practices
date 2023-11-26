let inputs = document.querySelectorAll('input');
let button = document.querySelector('button');
//1
for(let input of inputs) {
    input.addEventListener('keypress', function(event) {
        if (event.key == 'Enter') {
          if(input.dataset.right == input.value) {
            if(input.classList.contains('wrong')){
                input.classList.remove('wrong')
            }
            input.classList.add('right')
          }
          else {
            if(input.classList.contains('right')){
                input.classList.remove('right')
            }
            input.classList.add('wrong')
          }
          
        }
    });
}

//2
button.addEventListener('click',()=>{
    for(let input of inputs){
        if(input.dataset.right == input.value) {
            if(input.classList.contains('wrong')){
                input.classList.remove('wrong')
            }
            input.classList.add('right')
          }
          else {
            if(input.classList.contains('right')){
                input.classList.remove('right')
            }
            input.classList.add('wrong')
          }
    }
})