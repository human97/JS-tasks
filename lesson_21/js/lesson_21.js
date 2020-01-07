// #01
function t1() {
    document.querySelector('.out-1').textContent += 'touch '
}

document.querySelector('.div-1').addEventListener('touchstart', t1)


// #02
function t2(event) {
    document.querySelector('.out-2').textContent = event.touches.length
}

document.querySelector('.div-2').addEventListener('touchstart', t2)


// #03
const div3_1 = document.querySelector('.div-3_1')
const div3_2 = document.querySelector('.div-3_2')
const out3 = document.querySelector('.out-3')

document.body.addEventListener('touchstart', function (event) {
    if (div3_1 === event.target) {
        out3.textContent = event.target.innerHTML[2]
    } else if (div3_2 === event.target) {
        out3.textContent = event.target.innerHTML[2]
    }
})


// #04
function t4() {
    document.querySelector('.out-4').textContent += 'touch '
}

document.querySelector('.b-4').addEventListener('click', function () {
    document.querySelector('.div-4').addEventListener('touchstart', t4)
})


// #05
document.querySelector('.b-5').addEventListener('click', function () {
    document.querySelector('.div-4').removeEventListener('touchstart', t4)
})


// #06
function t6() {
    document.querySelector('.out-6').textContent += 'touchend '
}

document.querySelector('.div-4').addEventListener('touchend', t6)


// #07
const div7 = document.querySelector('.div-7')

function t7() {
    div7.style.backgroundColor = 'red'
}

div7.addEventListener('touchstart', t7)


// #08
const div8 = document.querySelector('.div-8')
const arr8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow']

function t8() {
    let bgColor = Math.floor(Math.random() * arr8.length)
    div8.style.backgroundColor = arr8[bgColor]
}

div8.addEventListener('touchstart', t8)


// #09
const div9 = document.querySelector('.div-9')
const out9 = document.querySelector('.out-9')

function t9(event) {
    out9.textContent = event.touches.length
}

div9.addEventListener('touchstart', t9)


// #10
const div10 = document.querySelector('.div-10')
let w = div10.offsetWidth

function t10() {
    w++
    div10.style.width = `${w}px`
}

div10.addEventListener('touchmove', t10)