let ul = document.querySelector('ul');
let h1 = document.querySelector('h1');
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let months = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']
h1.textContent = months[month+1] +" "+ year
let today = date.getDate();
let go = document.getElementById('go');
let back = document.getElementById('back');
go.addEventListener('click',()=>{
    if(month >= 10 ){
        month =  0;
        year++;
        h1.textContent = months[month] +" "+ year;
      }
      else {
        month++;
        h1.textContent = months[month+1] +" "+ year;
      }
    event.preventDefault();
})
back.addEventListener('click',()=>{
    
    if(month <= -1 ){
        month =  11;
        year--;
        h1.textContent = months[month] +" "+ year;
      }
      else{
        month--;
        h1.textContent = months[month+1] +" "+ year;
      }
    event.preventDefault();
})
for(let i = 1; i<=31; i++){
    let li = document.createElement('li');
    li.textContent = i;
    if(li.textContent == today){
        li.style.backgroundColor = 'red'
    }
    ul.appendChild(li)
}
