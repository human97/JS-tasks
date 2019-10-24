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
function func_5(){
    this.classList.remove('css-3')
}

let pU5 = document.querySelectorAll('.u-5')
for (let i = 0; i < pU5.length; i++) {
    pU5[i].onclick = func_5
}