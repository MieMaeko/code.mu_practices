"use strict";


let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');

add.addEventListener('click', function() {
	let tr = document.createElement('tr');
	allowEdit(createCell(tr, name.value, 'name'));
    allowEdit(createCell(tr, price.value, 'price'));
    allowEdit(createCell(tr, amount.value, 'amount'));
	createCell(tr,price.value * amount.value, 'cost');
	createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
       tr.remove();
       recountTotal();
    });
	table.appendChild(tr);
    recountTotal();
});

function createCell(tr, value, name) {
        let td;
        td = document.createElement('td');
        td.textContent = value;
        td.classList.add(name);
        tr.appendChild(td)
        return td;
};

function recountTotal() {
	let costs = table.querySelectorAll('.cost');
	
	if (costs) {
        let sum = 0;
		for(let cost of costs){
            sum += +cost.textContent
        }
        total.textContent = sum;
	}
};

function allowEdit(td) {
	td.addEventListener('dblclick', function() {
        let input = document.createElement('input');
        input.value = this.textContent;
        this.textContent = '';
        this.appendChild(input);
        input.focus()
        input.addEventListener('keydown',()=>{
            if(event.key == 'Enter'){
                td.textContent = input.value;
                if (td.classList.contains('price') || td.classList.contains('amount')) {
					let tr = td.parentElement;
					let price = tr.querySelector('.price');
					let amount = tr.querySelector('.amount');
					let cost = tr.querySelector('.cost');
				    cost.textContent = price.textContent * amount.textContent;
					recountTotal();
				}
            }
        })
       
	});
}