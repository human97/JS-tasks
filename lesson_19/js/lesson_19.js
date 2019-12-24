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


// #06
const div6 = document.querySelector('.div-6')

function t6() {
    document.querySelector('.ul-6').classList.toggle('hide')
}

div6.addEventListener('dblclick', t6)


// #07
const div7 = document.querySelector('.div-7')

function t7() {
    this.classList.toggle('active')
    return false
}

div7.oncontextmenu = t7


// #08
function t8() {
    if (this.checked) {
        document.oncontextmenu = () => {
            return false
        }
    } else {
        document.oncontextmenu = () => {
            return true
        }
    }
}

const check8 = document.querySelector('.ch-8')
check8.onchange = t8


// #09
const div9 = document.querySelector('.div-9')

function t9() {
    this.children[0].src = 'img/2.png'
    return false
}

div9.oncontextmenu = t9


// #10
const div10 = document.querySelector('.div-10')

function t10() {
    this.children[0].src = 'img/2.png'
}

div10.onmouseenter = t10


// #11
const div11 = document.querySelector('.div-11')

function t11() {
    this.children[0].src = 'img/1.png'
}

div11.onmouseenter = t10
div11.onmouseleave = t11


// #12
const div12 = document.querySelector('.div-12')

function t12() {
    this.classList.add('active')
}

div12.onmousedown = t12


// #13
const div13 = document.querySelector('.div-13')

function t13() {
    this.classList.remove('active')
}

div13.onmousedown = t12
div13.onmouseup = t13


// #14
function t14() {
    this.classList.add('active')
}

const div14 = document.querySelector('.div-14')
const btn14 = document.querySelector('.b-14')

btn14.onclick = function addClick14() {
    div14.onclick = t14
}


// #15
function t15() {
    num++
    this.textContent = num
}

let num = 1
const div15 = document.querySelector('.div-15')
div15.onmousemove = t15


// #16
const div16 = document.querySelector('.div-16')
let w16 = div16.clientWidth

function t16() {
    w16++
    this.style.width = `${w16}px`
}

div16.onmousemove = t16


// #17
const btnOn17 = document.querySelector('.b-17_on')
const btnOff17 = document.querySelector('.b-17_off')

btnOn17.onclick = function on17() {
    div16.onmousemove = t16
}

btnOff17.onclick = function off17() {
    div16.onmousemove = false
}