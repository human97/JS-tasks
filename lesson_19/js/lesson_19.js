// #01
const task1 = document.querySelector('.div-1')
const out1 = document.querySelector('.out-1')

function t1() {
    out1.textContent = this.textContent
}

task1.addEventListener('click', t1)


// #02

function t2(e) {
    console.log(e.altKey)
    out2.textContent = e.altKey
    return e.altKey
}

const div2 = document.querySelector('.div-2')
const out2 = document.querySelector('.out-2')
div2.addEventListener('click', t2)


// #03
let w3 = 75
const div3 = document.querySelector('.div-3')
const out3 = document.querySelector('.out-3')

function t3() {
    w3 += 5
    div3.style.width = w3 + 'px'
    out3.textContent = w3
}

div3.addEventListener('click', t3)


// #04
const div4 = document.querySelector('.div-4')
const out4 = document.querySelector('.out-4')

function t4() {
    out4.textContent = this.textContent
}

div4.addEventListener('dblclick', t4)


// #05
const div5 = document.querySelector('.div-5')

function t5() {
    this.classList.toggle('active')
}

div5.addEventListener('dblclick', t5)