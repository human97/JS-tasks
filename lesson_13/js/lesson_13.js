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
    for (const key in arr11) {
        out11 += `${key} : ${arr11[key].join(', ')}<hr>`
    }
    div11.innerHTML = out11
}


// #12
const sel12 = document.querySelector('.sel12')
const btn12 = document.querySelector('.btn12')

btn12.onclick = () => {
    const selInd12 = document.querySelector('.sel12').options.selectedIndex
    div11.innerHTML = arr11[sel12.options[selInd12].value].join(', ')
}