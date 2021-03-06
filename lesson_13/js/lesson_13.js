// #01
const div1 = document.querySelector('.div1')
const btn1 = document.querySelector('.btn1')

arr1 = {
    3: 'hello',
    'one': 'hi'
}

btn1.onclick = () => {
    let out1 = ''

    for (let key in arr1) {
        out1 += `${key} = ${arr1[key]}<br>`
    }

    div1.innerHTML = `${out1}`
}


// #02
const div2 = document.querySelector('.div2')
const btn2 = document.querySelector('.btn2')

arr2 = {
    3: 'hello',
    'one': 'hi',
    'first name': 'Ivan',
    'last name': 'Ivanov'
}

btn2.onclick = () => {
    let out2 = ''

    for (let key in arr2) {
        out2 += arr2[key].length > 4 ? `${key} = ${arr2[key]}<br>` : '' // вариант через условный (тернарный) оператор
        /*if (arr2[key].length > 4) {
            out2 += `${key} = ${arr2[key]}<br>`
        }*/
    }
    div2.innerHTML = `${out2}`
}


// #03
const div3 = document.querySelector('.div3')
const btn3 = document.querySelector('.btn3')

arr3 = {
    3: 'hello',
    'one': 'hi',
    'age': 29,
    'first name': 'Ivan',
    'last name': 'Ivanov'
}

btn3.onclick = () => {
    let out3 = ''

    for (let key in arr3) {
        out3 += key.length > 4 ? `key = ${key}<br>` : '' // вариант через условный (тернарный) оператор
        /*if (key.length > 4) {
            out3 += `key = ${key}<br>`
        }*/
    }

    div3.innerHTML = `${out3}`
}


// #04
const div4 = document.querySelector('.div4')
const btn4 = document.querySelector('.btn4')

arr4 = {
    4: 'hello',
    'one': 'hi',
    'age': 29,
    'height': 205,
    'first name': 'Ivan',
    'last name': 'Ivanov'
}

btn4.onclick = () => {
    let out4 = ''

    for (let key in arr4) {
        out4 += typeof arr4[key] == 'number' ? `${arr4[key]}<br>` : '' // вариант через условный (тернарный) оператор
        /*if (typeof arr4[key] == 'number') {
            out4 += `${arr4[key]}<br>`
        }*/
    }
    div4.innerHTML = `${out4}`
}


// #05
const div5 = document.querySelector('.div5')
const btn5 = document.querySelector('.btn5')

arr5 = {
    a: 7,
    z: 4,
    45: 12,
    f: 6
}

btn5.onclick = () => {
    let out5 = 0
    for (let key in arr5) {
        out5 += arr5[key]
    }
    div5.innerHTML = out5
}


// #06
const div6 = document.querySelector('.div6')
const btn6 = document.querySelector('.btn6')

const arr6 = {
    'name': 'John',
    'age': 29,
    'sex': 'male',
    'height': 184
}

btn6.onclick = () => {
    let out6 = ''
    for (let key in arr6) {
        out6 += `${key} = ${arr6[key]}<br>`
    }
    div6.innerHTML = `${out6}`
}


// #07
const div7 = document.querySelector('.div7')
const btn7 = document.querySelector('.btn7')
const inp7_1 = document.querySelector('.inp7_1')
const inp7_2 = document.querySelector('.inp7_2')

let arr7 = {
    'age': 100,
}

btn7.onclick = () => {
    let out7 = ''
    let inp7Key = inp7_1.value.trim()
    let inp7Val = inp7_2.value.trim()
    if (inp7Key !== '') {
        arr7[inp7Key] = inp7Val
        for (let key in arr7) {
            out7 += `${key} = ${arr7[key]}<br>`
        }
        div7.innerHTML = out7
    } else {
        return false
    }
}


// #08
const btn8Del = document.querySelector('.btn8_del')
const inp8Del = document.querySelector('.inp8_del')

btn8Del.onclick = () => {
    let out8 = ''
    let inp8Key = inp8Del.value.trim()
    if (inp8Key !== '') {
        delete arr7[inp8Key]
        for (let key in arr7) {
            out8 += `${key} = ${arr7[key]}<br>`
        }
        div7.innerHTML = out8
    } else {
        return false
    }
}


// #09
const btn9Del = document.querySelector('.btn9_del')
const inp9Del = document.querySelector('.inp9_del')

btn9Del.onclick = () => {
    let out9 = ''
    let inp9Key = inp9Del.value.trim()

    for (let key in arr7) {
        if (arr7[key] == inp9Key) {
            delete arr7[key]
            for (let key in arr7) {
                out9 += `${key} = ${arr7[key]}<br>`
            }
        }
    }
    div7.innerHTML = out9
}


// #10
const div10 = document.querySelector('.div10')
const btn10 = document.querySelector('.btn10')
const inp10 = document.querySelector('.inp10')

btn10.onclick = () => {
    let out10 = ''
    let inp10Key = inp10.value.trim()

    if (arr7[inp10Key] === undefined) {
        out10 = 'false'
    } else {
        out10 = 'true'
    }
    div10.innerHTML = out10
}


// #11
const div11 = document.querySelector('.div11')
const btn11 = document.querySelector('.btn11')

const arr11 = {
    red: [
        'Академгородок',
        'Житомирская',
        'Святошин',
        'Нивки',
        'Берестейская',
        'Шулявская',
        'Политехнический институт',
        'Вокзальная',
        'Университет',
        'Театральная',
        'Крещатик',
        'Арсенальная',
        'Днепр',
        'Гидропарк',
        'Левобережная',
        'Дарница',
        'Черниговская',
        'Лесная'
    ],
    green: [
        'Виноградарь',
        'Мостицкая',
        'Сырец',
        'Дорогожичи',
        'Лукьяновская',
        'Львовская брама',
        'Золотые ворота',
        'Дворец спорта',
        'Кловская',
        'Печерская',
        'Дружбы народов',
        'Выдубичи',
        'Теличка',
        'Славутич',
        'Осокорки',
        'Позняки',
        'Харьковская',
        'Вырлица',
        'Бориспольская',
        'Красный хутор'
    ],
    blue: [
        'Героев Днепра',
        'Минская',
        'Оболонь',
        'Петровка',
        'Тараса Шевченко',
        'Контрактовая площадь',
        'Почтовая площадь',
        'Майдан Незалежности',
        'Площадь Льва Толстого',
        'Олимпийская',
        'Дворец «Украина»',
        'Лыбедская',
        'Демиевская',
        'Голосеевская',
        'Васильковская',
        'Выставочный центр',
        'Ипподром',
        'Теремки',
        'Одесская'
    ],
}

btn11.onclick = () => {
    out11 = ''
    for (let key in arr11) {
        out11 += `${key} : ${arr11[key].join(', ')}<hr>`
    }
    div11.innerHTML = out11
}


// #12
// функция добавления списка в селект из массива
const addOptions = (select, arr) => {
    for (let i = 0; i < arr.length; i++) {
        select.add(new Option(arr[i]))
    }
}

const sel12 = document.querySelector('.sel12')
const btn12 = document.querySelector('.btn12')

// получили массив ключей объекта arr11
let branch11 = Object.keys(arr11)

addOptions(sel12, branch11)

btn12.onclick = () => {
    div11.innerHTML = arr11[sel12.value].join(', ')
}


// #13
const btn13 = document.querySelector('.btn13')
btn13.onclick = () => {
    div11.innerHTML = arr11[sel12.value].reverse().join(', ')
}


// #14
const sel14 = document.querySelector('.sel14')
const btn14 = document.querySelector('.btn14')

// функция добавления options в select из объекта
const allStation = (sel, obj) => {
    for (let key in obj) {
        for (let i = 0; i < obj[key].length; i++) {
            sel.add(new Option(obj[key][i]))
        }
    }
}

allStation(sel14, arr11) // все станции из объекта arr11 добавлены в select.sel14

// реализовал через addEventListener
btn14.addEventListener('click', function () {
    for (let key in arr11) {
        for (let i = 0; i < arr11[key].length; i++) {
            if (sel14.value === arr11[key][i]) {
                div11.innerHTML = `${key}`
                // это дополнения
                this.style.color = key
            }
        }
    }
})


// #15
const sel15_1 = document.querySelector('.sel15_1')
const sel15_2 = document.querySelector('.sel15_2')
const btn15 = document.querySelector('.btn15')

allStation(sel15_1, arr11) // все станции из объекта arr11 добавлены в select.sel15_1
allStation(sel15_2, arr11) // все станции из объекта arr11 добавлены в select.sel15_2

const branch15 = station => {
    for (let key in arr11) {
        for (let i = 0; i < arr11[key].length; i++) {
            if (station.value === arr11[key][i]) {
                return key
            }
        }
    }
}

btn15.addEventListener('click', function () {
    if (branch15(sel15_1) === (branch15(sel15_2))) {
        let selIndx1 = sel15_1.options.selectedIndex
        let selIndx2 = sel15_2.options.selectedIndex

        selIndx1 !== selIndx2 ? div11.innerHTML = `${Math.abs(selIndx2 - selIndx1)-1}` : div11.innerHTML = `Одинаковые станции!`

    } else {
        div11.innerHTML = `Выберите одинаковые ветки!`
    }
})


// #16
const sel16 = document.querySelector('.sel16')
const rad16All = document.querySelectorAll('input[name=branch16]')

// при входе на страницу цикл добавляет в select.sel16 станции ветки red из объекта arr11
// можно доработать, чтобы при загрузке страници определял выбранный radio и добавлять соответствующие станции в select.sel16
for (let i = 0; i < arr11.red.length; i++) {
    sel16.add(new Option(arr11.red[i]))
}

for (let i = 0; i < rad16All.length; i++) {
    rad16All[i].onchange = branch16
}

function branch16() {
    let br16 = arr11[this.value]
    sel16.length = 0
    for (let i = 0; i < arr11[this.value].length; i++) {
        sel16.add(new Option(arr11[this.value][i]))
    }
}


// #17
const arr17 = {
    red: [
        ['Академгородок', 0],
        'Житомирская',
        'Святошин',
        'Нивки',
        'Берестейская',
        'Шулявская',
        'Политехнический институт',
        'Вокзальная',
        'Университет',
        ['Театральная', 1],
        ['Крещатик', 1],
        'Арсенальная',
        'Днепр',
        'Гидропарк',
        'Левобережная',
        'Дарница',
        'Черниговская',
        ['Лесная', 0]
    ],
    green: [
        ['Виноградарь', 0],
        'Мостицкая',
        'Сырец',
        'Дорогожичи',
        'Лукьяновская',
        'Львовская брама',
        ['Золотые ворота', 1],
        ['Дворец спорта', 1],
        'Кловская',
        'Печерская',
        'Дружбы народов',
        'Выдубичи',
        'Теличка',
        'Славутич',
        'Осокорки',
        'Позняки',
        'Харьковская',
        'Вырлица',
        'Бориспольская',
        ['Красный хутор', 0]
    ],
    blue: [
        ['Героев Днепра', 0],
        'Минская',
        'Оболонь',
        'Петровка',
        'Тараса Шевченко',
        'Контрактовая площадь',
        'Почтовая площадь',
        ['Майдан Незалежности', 1],
        ['Площадь Льва Толстого', 1],
        'Олимпийская',
        'Дворец «Украина»',
        'Лыбедская',
        'Демиевская',
        'Голосеевская',
        'Васильковская',
        'Выставочный центр',
        'Ипподром',
        'Теремки',
        ['Одесская', 0]
    ],
}

const div17 = document.querySelector('.div17')
const btn17 = document.querySelector('.btn17')

btn17.addEventListener('click', function () {
    let out17 = ''
    for (let key in arr17) {
        for (let i = 0; i < arr17[key].length; i++) {
            let station17 = arr17[key][i]
            Array.isArray(station17) ? out17 += `${station17.join(' - ')}<br>` : out17 += `${station17}<br>`
        }
    }
    div17.innerHTML = `${out17}`
})


// #18
const btn18 = document.querySelector('.btn18')

btn18.addEventListener('click', function () {
    let out18 = ''
    for (let key in arr17) {
        for (let i = 0; i < arr17[key].length; i++) {
            let station18 = arr17[key][i]
            if (Array.isArray(station18) && station18[1] === 1) {
                out18 += `${station18.join(' - ')}<br>`
            }
        }
    }
    div17.innerHTML = `${out18}`
})


// #19
const div19 = document.querySelector('.div19')
const btn19 = document.querySelector('.btn19')

const arr19 = {
    Russia: {
        capital: 'Moscow',
        population: 145000000,
        area: 17125200
    },
    China: {
        capital: 'Beijing',
        population: 1404000000,
        area: 9600000
    },
    India: {
        capital: 'Delhi',
        population: 1324171354,
        area: 3287263
    },
}

btn19.addEventListener('click', function () {
    let out19 = ''
    for (let country in arr19) {
        out19 += `${country}<br>`
        for (let key in arr19[country]) {
            out19 += `${key}: ${arr19[country][key]}<br>`
        }
        out19 += `<hr>`
    }
    div19.innerHTML = `${out19}`
})


// #20
let out20 = ''
const sel20 = document.querySelector('.sel20')
let countrisSel20 = Object.keys(arr19)

// при входе на страницу цикл добавляет в select.sel20 список стран из arr19
for (let i = 0; i < countrisSel20.length; i++) {
    sel20.add(new Option(countrisSel20[i]))
}

// при входе на страницу цикл добавляет в div.div20 object[0] из arr19
for (let country in arr19) {
    out20 += `${country}<br>`
    for (let key in arr19[country]) {
        out20 += `${key}: ${arr19[country][key]}<br>`
    }
    div19.innerHTML = `${out20}`
    break
}

sel20.addEventListener('change', function () {
    let countrySel20 = arr19[this.value]
    out20 = `${this.value}<br>`
    for (let key in countrySel20) {
        out20 += `${key}: ${countrySel20[key]}<br>`
    }
    div19.innerHTML = `${out20}`
})