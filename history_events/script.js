let events = {
    988: [
        {
            date:'28.07.988',
            name: 'Крещение Руси',
            description: "В 988 году в Киевской Руси состоялось крещение князя Владимира Святого и его приблизительно 5 тысяч воинов и жителей Киева в Днепре."
        }
        
    ],
    1991:[
            {
            date:'25.12.1991',
            name:'Распад СССР',
            description:'Михаил Горбачёв 25 декабря 1991 года объявил о прекращении своей деятельности на посту президента СССР'
            }
    ],
    2005: [
        {
            date:'22.01.2005',
            name:'Северная Корея - ядерная держава',
            description:'Министр иностранных дел Ким Ке Гван объявил, что КНДР является ядерной державой'
        },
        {
            date:'23.04.2005',
            name:"Первое видео на Ютубе",
            description:"23 апреля на YouTube появляется самое первое видео"
        }
    ],
};
let input = document.getElementById('input');
let table = document.getElementById('table');
input.addEventListener('keydown',()=>{
    if(event.key == 'Enter'){
        let year = input.value;
        if(events[year]){
            table.textContent = '';
            for (let event of events[year]) {
                let tr = document.createElement('tr');
                let td;  
                td = document.createElement('td');
                td.textContent = event.date;
                tr.appendChild(td);
                
                td = document.createElement('td');
                td.textContent = event.name;
                tr.appendChild(td);
                
                td = document.createElement('td');
                td.textContent = event.description;
                tr.appendChild(td);
                
                table.appendChild(tr);
            }
        }
    }
})