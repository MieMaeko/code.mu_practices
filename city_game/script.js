
let allCities = ["Абакан","Абдулино","Абинск","Агидель",
"Агрыз","Адыгейск","Азнакаево","Азов","Ак-Довурак","Аксай",
"Алагир","Алапаевск","Алатырь","Алдан","Алейск","Апшеронск",
"Арамиль","Аргун","Ардатов","Ардон","Арзамас","Аркадак","Армавир",
"Армянск","Арсеньев","Арск","Артём","Артёмовск","Артёмовский",
"Архангельск","Асбест","Асино","Астрахань","Аткарск","Ахтубинск",
"Ачинск","Аша","Бабаево","Бабушкин","Бавлы","Багратионовск","Байкальск",
"Баймак","Бакал","Баксан","Балабаново","Балаково","Балахна","Балашиха",
"Балашов","Балей","Балтийск","Барабинск","Белозерск","Белокуриха",
"Беломорск","Белоозёрский","Белорецк","Белореченск","Белоусово",
"Белоярский","Белый","Бердск","Березники","Берёзовский","Берёзовский",
"Беслан","Бийск","Бикин","Билибино","Биробиджан","Бирск","Бирюсинск",
"Бирюч","Благовещенск","Благовещенск","Благодарный","Бобров","Богданович",
"Богородицк","Богородск","Боготол","Богучар","Бодайбо","Бокситогорск",
"Болгар","Бологое","Болотное","Болохово","Болхов","Большой Камень","Бор",
"Борзя","Борисоглебск","Боровичи","Боровск","Бородино","Братск","Бронницы",
"Верхняя Тура","Верхотурье","Верхоянск","Весьегонск","Ветлуга","Видное",
"Вилюйск","Вилючинск","Вихоревка","Вичуга","Владивосток","Владикавказ",
"Владимир","Волгоград","Волгодонск","Волгореченск","Волжск","Волжский",
"Вологда","Володарск","Волоколамск","Волосово","Волхов","Волчанск","Вольск",
"Воркута","Воронеж","Ворсма","Воскресенск","Воткинск","Всеволожск","Вуктыл",
"Выборг","Голицыно","Горбатов","Горно-Алтайск","Горнозаводск","Горняк",
"Городец","Городище","Городовиковск","Гороховец","Горячий Ключ",
"Грайворон","Гремячинск","Грозный","Грязи","Грязовец","Губаха",
"Губкин","Губкинский","Гудермес","Гуково","Гулькевичи","Гурьевск",
"Гусев","Гусиноозёрск","Гусь-Хрустальный","Давлеканово","Дагестанские Огни",
"Далматово","Дальнегорск","Дальнереченск","Данилов","Данков","Дегтярск",
"Дедовск","Демидов","Дербент","Десногорск","Джанкой","Дзержинск","Дзержинский",
"Дивногорск","Дигора","Димитровград","Дмитриев","Дмитров","Дмитровск",
"Дно","Добрянка","Долгопрудный","Долинск","Елец","Елизово","Ельня",
"Еманжелинск","Емва","Енисейск","Ермолино","Ершов","Ессентуки","Ефремов",
"Железноводск","Железногорск","Железногорск-Илимский","Жердевка",
"Жигулёвск","Жиздра","Звенигород","Зверево","Зеленогорск","Зеленоградск",
"Зеленодольск","Зеленокумск","Зерноград","Зея","Зима","Златоуст",
"Злынка","Змеиногорск","Знаменск","Зубцов","Зуевка","Ивангород","Иваново",
"Ивантеевка","Ивдель","Игарка","Ижевск","Избербаш","Изобильный","Иланский",
"Инза","Иннополис","Инсар","Инта","Ипатово","Ирбит","Иркутск","Исилькуль",
"Искитим","Истра","Ишим","Ишимбай","Карабаново","Карабаш","Карабулак",
"Карасук","Карачаевск","Карачев","Каргат","Каргополь","Карпинск","Карталы",
"Касимов","Касли","Каспийск","Катав-Ивановск","Катайск","Качканар",
"Кашин","Кашира","Кедровый","Кемерово","Кемь","Керчь","Кизел","Кизилюрт",
"Кизляр","Кимовск","Кимры","Кингисепп","Кинель","Кинешма","Киреевск",
"Киренск","Киржач","Кириллов","Кириши","Киров","Кировград","Кирово-Чепецк",
"Кировск","Кирс","Кирсанов","Киселёвск","Кисловодск","Клин","Клинцы",
"Княгинино","Ковдор","Кострома","Котельники","Котельниково","Котельнич",
"Котлас","Котово","Котовск","Кохма","Красавино","Красноармейск","Красновишерск",
"Красногорск","Краснодар","Краснозаводск","Краснознаменск","Краснокамск",
"Красноперекопск","Краснослободск","Краснотурьинск","Красноуральск",
"Красноуфимск","Красноярск","Красный Кут","Красный Сулин","Красный Холм",
"Кремёнки","Кропоткин","Крымск","Кстово","Кубинка","Кувандык","Кувшиново",
"Кудрово","Кудымкар","Кузнецк","Куйбышев","Кукмор","Кулебаки","Кумертау",
"Кунгур","Купино","Курган","Курганинск","Курильск","Курлово","Куровское",
"Курск","Куртамыш","Курчалой","Курчатов","Куса","Кушва","Кызыл","Кыштым",
"Кяхта","Лабинск","Лабытнанги","Лагань","Ладушкин","Лаишево","Лакинск",
"Лангепас","Лахденпохья","Лебедянь","Лениногорск","Ленинск","Ленинск-Кузнецкий",
"Ленск","Лермонтов","Лесной","Лесозаводск","Лесосибирск","Ливны","Ликино-Дулёво",
"Липецк","Липки","Лиски","Лихославль","Лобня","Лодейное Поле","Лосино-Петровский",
"Луга","Луза","Лукоянов","Луховицы","Лысково","Лысьва","Лыткарино","Льгов",
"Любань","Люберцы","Любим","Людиново","Лянтор","Магадан","Магас","Магнитогорск",
"Майкоп","Майский","Макаров","Макарьев","Макушино","Малая Вишера","Малгобек",
"Малмыж","Малоархангельск","Малоярославец","Мамадыш","Мамоново","Мантурово",
"Мариинск","Мариинский Посад","Маркс","Махачкала","Мглин","Мегион","Медвежьегорск",
"Медногорск","Медынь","Межгорье","Междуреченск","Мезень","Меленки","Мелеуз",
"Менделеевск","Мензелинск","Мещовск","Миасс","Микунь","Миллерово",
"Минеральные Воды","Минусинск","Миньяр","Мирный","Михайлов","Михайловка",
"Михайловск","Мичуринск","Могоча","Можайск","Можга","Моздок","Мончегорск",
"Морозовск","Моршанск","Мосальск","Москва","Муравленко","Мураши","Мурино",
"Мурманск","Муром","Мценск","Мыски","Мытищи","Мышкин","Набережные Челны",
"Навашино","Наволоки","Надым","Назарово","Назрань","Называевск","Нальчик",
"Нариманов","Наро-Фоминск","Нарткала","Нарьян-Мар","Находка","Невель",
"Невельск","Невинномысск","Невьянск","Нелидово","Неман","Нерехта","Нерчинск",
"Нерюнгри","Нестеров","Нефтегорск","Нефтекамск","Нефтекумск","Нефтеюганск","Нея",
"Нижневартовск","Нижнекамск","Нижнеудинск","Нижние Серги","Нижний Ломов",
"Нижний Новгород","Нижний Тагил","Нижняя Салда","Нижняя Тура","Николаевск",
"Николаевск-на-Амуре","Никольск","Никольское","Новая Ладога","Новая Ляля",
"Новоалександровск","Новоалтайск","Новоаннинский","Нововоронеж","Новодвинск",
"Новозыбков","Новокубанск","Новокузнецк","Новокуйбышевск","Новомичуринск",
"Новомосковск","Новопавловск","Новоржев","Новороссийск","Новосибирск","Новосиль",
"Новосокольники","Новотроицк","Новоузенск","Омутнинск","Онега","Опочка",
"Петровск","Петровск-Забайкальский","Петрозаводск","Петропавловск-Камчатский",
"Петухово","Петушки","Печора","Печоры","Пикалёво","Пионерский","Питкяранта",
"Плавск","Пласт","Плёс","Поворино","Подольск","Подпорожье","Покачи","Покров",
"Покровск","Полевской","Полесск","Полысаево","Полярные Зори","Полярный","Поронайск",
"Порхов","Похвистнево","Почеп","Починок","Пошехонье","Правдинск","Приволжск",
"Приморск","Приморско-Ахтарск","Приозерск","Прокопьевск","Пролетарск","Протвино",
"Прохладный","Псков","Пугачёв","Пудож","Пустошка","Пучеж","Пушкино","Пущино",
"Пыталово","Пыть-Ях","Пятигорск","Радужный","Радужный","Райчихинск","Раменское",
"Рассказово","Россошь","Ростов","Ростов-на-Дону","Рошаль","Ртищево","Рубцовск",
"Рудня","Руза","Рузаевка","Рыбинск","Рыбное","Рыльск","Ряжск","Рязань","Саки",
"Салават","Салаир","Салехард","Сальск","Самара","Санкт-Петербург","Саранск",
"Сарапул","Саратов","Саров","Сасово","Сатка","Североморск","Североуральск",
"Северск","Севск","Сегежа","Сельцо","Семёнов","Семикаракорск","Семилуки",
"Сенгилей","Серафимович","Сергач","Сергиев Посад","Старая Купавна","Старая Русса",
"Старица","Стародуб","Старый Крым","Старый Оскол","Стерлитамак","Стрежевой",
"Строитель","Струнино","Ступино","Суворов","Судак","Суджа","Судогда","Суздаль",
"Сунжа","Суоярви","Сураж","Сургут","Суровикино","Сурск","Сусуман","Сухиничи",
"Сухой Лог","Сызрань","Сыктывкар","Сысерть","Сычёвка","Сясьстрой","Тавда",
"Таганрог","Тайга","Тайшет","Талдом","Талица","Тамбов","Тара","Тарко-Сале",
"Таруса","Татарск","Таштагол","Тверь","Теберда","Тейково","Темников","Темрюк",
"Терек","Тетюши","Тотьма","Трёхгорный","Троицк","Трубчевск","Туапсе","Туймазы",
"Тула","Тулун","Туран","Туринск","Тутаев","Тында","Тырныауз","Тюкалинск","Тюмень",
"Уварово","Углегорск","Углич","Удачный","Удомля","Ужур","Узловая","Улан-Удэ",
"Ульяновск","Устюжна","Уфа","Ухта","Учалы","Уяр","Фатеж","Феодосия","Фокино",
"Фокино","Фролово","Фрязино","Фурманов","Хабаровск","Хадыженск","Ханты-Мансийск",
"Харабали","Харовск","Хасавюрт","Хвалынск","Хилок","Химки","Холм","Холмск",
"Хотьково","Цивильск","Цимлянск","Циолковский","Чадан","Чайковский","Чапаевск",
"Чаплыгин","Чебаркуль","Чебоксары","Чегем","Чекалин","Челябинск","Чердынь",
"Черемхово","Черепаново","Череповец","Чусовой","Чухлома","Шагонар","Шадринск",
"Шали","Шарыпово","Шарья","Шатура","Шахты","Шахунья","Шацк","Шебекино","Шелехов",
"Шенкурск","Шилка","Шимановск","Шиханы","Шлиссельбург","Шумерля","Шумиха",
"Шуя","Электрогорск","Электросталь","Электроугли","Элиста","Энгельс","Эртиль",
"Югорск","Южа","Южно-Сахалинск","Южно-Сухокумск","Южноуральск","Юрга",
"Юрьев-Польский","Юрьевец","Ярцево","Ясногорск","Ясный","Яхрома"]
let cities = [];
let field   = document.querySelector('#field');
let message = document.querySelector('#message');
field.addEventListener('keyup', () => {
    let city
    if (event.key === 'Enter') {
        city = event.target.value[0].toUpperCase() + event.target.value.slice(1).toLowerCase();
        if (city) {
            if (!allCities.includes(city)) {
                message.textContent = 'Такого города робот не знает!'
            } else if (cities.includes(city)) {
                message.textContent = 'Вы ввели город который уже был в игре.'
            } else {
                if (cities.length === 0) {
                    cities.push(city)
                    let robot = randomWord()
                    message.textContent = 'Слово робота: ' + robot;
                    field.value = ''
                } else {
                    let [firstLetter, lastLetter] = checkedLetters(city)
                    if (firstLetter === lastLetter) {
                        cities.push(city)
                        let robot = randomWord()
                        message.textContent = 'Слово робота: ' + robot
                        field.value = ''
                    } else {
                        message.textContent = 'Слово начинается не с последней буквы слова робота'
                    }
                }
            }
        }
    }
})
function checkedLetters(city) {
    let firstLetter = city[0].toLowerCase()
    let lastUsedCity = cities[cities.length - 1]
    let lastLetter = lastUsedCity[lastUsedCity.length - 1].toLowerCase()
    if (lastLetter === 'ь' || lastLetter === 'ы'  || lastLetter === 'й') {
        lastLetter = lastUsedCity[lastUsedCity.length - 2].toLowerCase()
    }
    return [firstLetter, lastLetter]
}
function randomWord() {
    let robot = allCities[Math.floor(Math.random() * (allCities.length - 0 + 1)) + 0]
    let [firstLetter, lastLetter] = checkedLetters(robot)
    if (!cities.includes(robot) && robot && firstLetter === lastLetter) {
        cities.push(robot)
        return robot
    } else {
        return randomWord()
    }

}