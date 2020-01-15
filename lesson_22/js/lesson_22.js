// #01
const div1 = document.querySelector('.div-1')
const out1 = document.querySelector('.out-1')
let counter1 = 0

div1.onclick = function () {
    counter1++
    out1.textContent = counter1
}


// #02
const div2 = document.querySelector('.div-2')
const out2 = document.querySelector('.out-2')
let counter2 = 0

div2.ondblclick = function () {
    counter2++
    out2.textContent = counter2
}


// #03
const div3 = document.querySelector('.div-3')
const out3 = document.querySelector('.out-3')
let counter3 = 0

div3.onmousemove = function () {
    counter3++
    out3.textContent = counter3
}


// #04
const div4 = document.querySelector('.div-4')
const out4 = document.querySelector('.out-4')
let counter4 = 0

div4.oncontextmenu = function () {
    counter4++
    out4.textContent = counter4
}


// #05
const div5 = document.querySelector('.div-5')
const out5 = document.querySelector('.out-5')
let counter5 = 0

div5.onmousedown = function () {
    counter5++
    out5.textContent = counter5
}
// срабатывает при клике