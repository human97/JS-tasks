// #01
const div1 = document.querySelector('.div1')
const btn1 = document.querySelector('.btn1')
let out1 = ''

arr1 = {
    3: 'hello',
    'one': 'hi'
}

btn1.onclick = () => {
    if (div1.innerHTML === '') {
        for (let key in arr1) {
            out1 += `${key} = ${arr1[key]}<br>`
        }

        div1.innerHTML = `${out1}`
    } else {
        false
    }
}


// #02
const div2 = document.querySelector('.div2')
const btn2 = document.querySelector('.btn2')
let out2 = ''

arr2 = {
    3: 'hello',
    'one': 'hi',
    'first name': 'Ivan',
    'last name': 'Ivanov'
}

btn2.onclick = () => {
    if (div2.innerHTML === '') {
        for (let key in arr2) {
            out2 += arr2[key].length > 4 ? `${key} = ${arr2[key]}<br>` : '' // вариант через условный (тернарный) оператор
            /*if (arr2[key].length > 4) {
                out2 += `${key} = ${arr2[key]}<br>`
            }*/
        }
        div2.innerHTML = `${out2}`
    } else {
        false
    }
}


// #03
const div3 = document.querySelector('.div3')
const btn3 = document.querySelector('.btn3')
let out3 = ''

arr3 = {
    3: 'hello',
    'one': 'hi',
    'age': 29,
    'first name': 'Ivan',
    'last name': 'Ivanov'
}

btn3.onclick = () => {
    if (div3.innerHTML === '') {
        for (let key in arr3) {
            out3 += key.length > 4 ? `key = ${key}<br>` : '' // вариант через условный (тернарный) оператор
            /*if (key.length > 4) {
                out3 += `key = ${key}<br>`
            }*/
        }
        div3.innerHTML = `${out3}`
    } else {
        false
    }
}


// #04
const div4 = document.querySelector('.div4')
const btn4 = document.querySelector('.btn4')
let out4 = ''

arr4 = {
    4: 'hello',
    'one': 'hi',
    'age': 29,
    'height': 205,
    'first name': 'Ivan',
    'last name': 'Ivanov'
}

btn4.onclick = () => {
    if (div4.innerHTML === '') {
        for (let key in arr4) {
            out4 += typeof arr4[key] == 'number' ? `${arr4[key]}<br>` : '' // вариант через условный (тернарный) оператор
            /*if (typeof arr4[key] == 'number') {
                out4 += `${arr4[key]}<br>`
            }*/
        }
        div4.innerHTML = `${out4}`
    } else {
        false
    }
}