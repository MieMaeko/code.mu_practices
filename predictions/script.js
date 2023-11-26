let predictions = {
    goods: ['у вас сегодня будет замечательный день',
            'устройте сегодня себе выходной - пусть весь мир подождет',
            'сегодня вас ждет успех при изучении JavaScript',
            'сегодня вас ждет удача и успех во всех начинаниях'
        ],
    bads: ['сегодня лучше не выходите из дома',
          'сегодня лучше полежите весь день на диване',
          'сегодня вы рискуете что-нибудь забыть при выходе из дома'
        ]
};

let timer = document.querySelector('#timer');
let text  = document.querySelector('#text');
let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let length = predictions.goods.length + predictions.bads.length
let random;
let timerId;
start.addEventListener('click', function() {
    this.classList.remove('active');
    stop.classList.add('active');
    
    timerId = setInterval(function() {
        timer.textContent = random = getRandomInt(1,length);
    }, 100);
});

stop.addEventListener('click', function() {
    this.classList.remove('active');
    clearInterval(timerId);
    if (random>=4) {
        text.textContent = predictions.bads[getRandomInt(0,3)];
        text.classList.add('red')
    }
    else {
        text.textContent = predictions.goods[random];
        text.classList.add('green')
    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}