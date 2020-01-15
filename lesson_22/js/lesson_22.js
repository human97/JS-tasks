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