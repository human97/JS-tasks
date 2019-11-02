// функция очищения input
function inputClear() {
    this.value = ''
}

let inputAll = document.querySelectorAll('input') // получил все input
// цикл на все input при событии onclick вешает функцию 
for (let i = 0; i < inputAll.length; i++) {
    inputAll[i].onclick = inputClear
}
//*********

// #01
let arr1 = []
const inp1 = document.querySelector('.inp1')
const btn1 = document.querySelector('.btn1')
const div1 = document.querySelector('.div1')
let inp1Val
btn1.onclick = () => {
    inp1Val = inp1.value
    if (inp1Val.trim() === '') {
        alert('Input data')
        inp1.value = ''
    } else {
        arr1.push(inp1Val.trim())
        div1.textContent = arr1
        inp1.value = ''
    }
}


// #02
const btn2 = document.querySelector('.btn2')
btn2.onclick = () => {
    arr1.pop()
    div1.textContent = arr1
}


// #03
const btn3 = document.querySelector('.btn3')
btn3.onclick = () => {
    arr1.shift()
    div1.textContent = arr1
    inp1.value = ''
}


// #04
const btn4 = document.querySelector('.btn4')
btn4.onclick = () => {
    inp1Val = inp1.value
    if (inp1Val.trim() === '') {
        alert('Input data')
        inp1.value = ''
    } else {
        arr1.unshift(inp1Val.trim())
        div1.textContent = arr1
        inp1.value = ''
    }
}


// #05
let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello']

const inp5_1 = document.querySelector('.inp5-1')
const inp5_2 = document.querySelector('.inp5-2')
const btn5 = document.querySelector('.btn5')
const div5 = document.querySelector('.div5')
let inp5_1Val
let inp5_2Val
let arr5L // длинна массива - 1

btn5.onclick = () => {
    inp5_1Val = inp5_1.value
    inp5_2Val = inp5_2.value
    arr5L = arr5.length - 1
    if (inp5_1Val.trim() === '' || inp5_2Val.trim() === '') {
        alert('error')
    } else if (inp5_1Val.trim() < 0 || inp5_1Val.trim() > arr5L || inp5_2Val.trim() <= 0) {
        alert('error')
    } else {
        arr5.splice(inp5_1Val, inp5_2Val)
        div5.textContent = arr5
    }
}

// упрощенный вариант без валидации
/*
btn5.onclick = () => {
    inp5_1Val = inp5_1.value
    inp5_2Val = inp5_2.value
    arr5.splice(inp5_1Val, inp5_2Val)
    div5.textContent = arr5
}
*/


// #06
const btn6 = document.querySelector('.btn6')
const inp6 = document.querySelector('.inp6')
const div6 = document.querySelector('.div6')

let inp6Val
let arr6 = []

const funcPush = () => {
    inp6Val = inp6.value
    arr6L = arr6.length
    arr6[arr6L] = inp6Val.trim()
    div6.textContent = arr6
}

btn6.onclick = funcPush


// #07
const btn7 = document.querySelector('.btn7')
const div7 = document.querySelector('.div7')
let arr7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const funcPop = () => {
    if (arr7.length > 0) {
        arr7.length -= 1
        div7.textContent = arr7
    } else {
        alert('error')
    }
}

btn7.onclick = funcPop