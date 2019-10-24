// #01
const pU1 = document.querySelector('.u-1')
const btn1 = document.querySelector('.btn1')

function func_1() {
    pU1.style.width = '200px'
    pU1.style.height = '100px'
}

//btn1.onclick = func_1

// вариант через стрелочную функцию
const func_1s = () => {
    pU1.style.width = '200px'
    pU1.style.height = '100px'
}

btn1.onclick = func_1s


// #02
const btn2 = document.querySelector('.btn2')
const pU2 = document.querySelector('.u-2')

function func_2() {
    pU2.classList.add('css-1')
}

btn2.onclick = func_2


// #03
function func_3() {
    this.style.background = 'red'
}

let pU3 = document.querySelectorAll('.u-3')
for (let i = 0; i < pU3.length; i++) {
    pU3[i].onclick = func_3
}


// #04
function func_4() {
    this.classList.add('css-2')
}

let pU4 = document.querySelectorAll('.u-4')
for (let i = 0; i < pU4.length; i++) {
    pU4[i].onclick = func_4
}


// #05
function func_5() {
    this.classList.remove('css-3')
}

let pU5 = document.querySelectorAll('.u-5')
for (let i = 0; i < pU5.length; i++) {
    pU5[i].onclick = func_5
}


// #06
function func_6() {
    this.classList.toggle('active')
}

const btn6 = document.querySelector('.btn6')
btn6.onclick = func_6


// #07
function func_7() {
    let css3L = document.querySelectorAll('.css-3').length
    return css3L
}

const div7 = document.querySelector('.div7')
const btn7 = document.querySelector('.btn7')
let p7 = document.createElement('p')
p7.classList.add('p7', 'result')
div7.insertBefore(p7, div7.firstChild)
p7.textContent = 'X'

btn7.onclick = function () {
    p7.textContent = func_7()
}


// #08
let pU1All = document.querySelectorAll('.u-1')
console.log(pU1All)

function func_8() {
    for (let i = 0; i < pU1All.length; i++) {
        pU1All[i].setAttribute('title', 'test-data')
    }
}

const btn8 = document.querySelector('.btn8')
btn8.onclick = func_8


// #09
function func_9() {
    let data9 = this.getAttribute('data')
    result9.textContent = data9
}

const btn9 = document.querySelectorAll('.btn9')
const result9 = document.querySelector('.result9')

for (let i = 0; i < btn9.length; i++) {
    btn9[i].onclick = func_9
}


// #10
function func_10() {
    let data10 = this.getAttribute('data-currency')
    result10.textContent = data10
}

const btn10 = document.querySelectorAll('.btn10')
const result10 = document.querySelector('.result10')

for (let i = 0; i < btn10.length; i++) {
    btn10[i].onclick = func_10
}


