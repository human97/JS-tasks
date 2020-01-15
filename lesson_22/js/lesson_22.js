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


// #06
const div6 = document.querySelector('.div-6')
const out6 = document.querySelector('.out-6')
let counter6 = 0

div6.onmouseenter = function () {
    counter6++
    out6.textContent = counter6
}


// #07
const div7 = document.querySelector('.div-7')
const out7 = document.querySelector('.out-7')
let counter7 = 0

div7.onmouseleave = function () {
    counter7++
    out7.textContent = counter7
}


// #08
const div8 = document.querySelector('.div-8')
const out8 = document.querySelector('.out-8')
let counter8 = 0

div8.onmouseout = function () {
    counter8++
    out8.textContent = counter8
}
// срабатывает так же как mouseleave


// #09
const div9 = document.querySelector('.div-9')
const out9 = document.querySelector('.out-9')
let counter9 = 0

div9.onmouseover = function () {
    counter9++
    out9.textContent = counter9
}
// поведение как у mouseenter


// #10
const div10 = document.querySelector('.div-10')
const out10 = document.querySelector('.out-10')
let counter10 = 0

div10.onmouseup = function () {
    counter10++
    out10.textContent = counter10
}
// срабатывает при отжатии кнопки мыши