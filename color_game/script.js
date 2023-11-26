let table = document.getElementById('field')
let rows = 3;
let cols = 3;
let colors = ['red', 'green', 'blue'];

createTable(rows,cols);
function createTable(rows,cols) {
    for(let i = 1; i<=rows; i++){
        let tr = document.createElement('tr');
        for(let j = 1; j<=cols; j++){
            let td = document.createElement('td');
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            td.classList.add(randomColor);
            let color = colors.indexOf(randomColor)
            td.addEventListener('click', function() {
                this.className = colors[color++];
                if (color == colors.length) {
                    color = 0;
                }
                checkColor(event.target)
            })
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
}
function checkColor (elem){
    let tds = document.querySelectorAll('#field td');
    let i = 0;
    for(let d of tds) {
        if(elem.className == d.className){
            i++;
            if(i == 9) {
                console.log('u win')
            }
        }
        else {
            i = 0;
        }
    }
}

