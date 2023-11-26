let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');

        let task = document.createElement('span');
		task.classList.add('task');
		task.textContent = this.value;
        task.addEventListener('dblclick', function() {
            let inp = document.createElement('input');
            inp.value = task.textContent;
            task.textContent = '';
            this.appendChild(inp);
            inp.addEventListener('keypress', function(event) {
                if (event.key == 'Enter') {
                    task.textContent = this.value;
                }
            });
        });
		li.appendChild(task);
		
		let remove = document.createElement('span');
		remove.classList.add('remove');
		remove.textContent = 'удалить';
        remove.addEventListener('click', function() {
            li.remove();
        });
		li.appendChild(remove);
		
		let mark = document.createElement('span');
		mark.classList.add('mark');
		mark.textContent = 'сделано';
        mark.addEventListener('click', function() {
            task.classList.add('done')
        });
		li.appendChild(mark);

        this.value = '';
        list.appendChild(li)
	}
});
