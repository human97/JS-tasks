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

function t10(e) {
    w++
    div10.style.width = `${w}px`
}

div10.addEventListener('touchmove', t10)


// #11
const div11 = document.querySelector('.div-11')
const out11 = document.querySelector('.out-11')

function t11(event) {
    out11.textContent = `${event.touches[0].radiusX} -- ${event.touches[0].radiusY}`
}

div11.addEventListener('touchstart', t11)


// #12
const arr12 = [
    ['1.png', 'Youtube'],
    ['2.png', 'Twitter'],
    ['3.png', 'Skype'],
    ['4.png', 'Facebook'],
    ['5.png', 'Instagram'],
    ['6.png', 'VK']
]

const div12wrapper = document.querySelector('.div-12-wrapper')
const images12min = document.querySelectorAll('.img-12-min')
const div12max = document.querySelector('.div-12-max')
const p12text = document.querySelector('.img-12-text')
const out12 = document.querySelector('.out-12')
const btnNext = document.querySelector('.next')
const btnPrev = document.querySelector('.prev')
const btnReset = document.querySelector('.reset')
let current12 = 0

for (let key in arr12) {
    for (let k = 0; k < arr12[key].length; k++) {}
    console.log(arr12[key][0])
    console.log(arr12[key][1])
}

function load12(img) {
    img.classList.remove('active-img')
    images12min[0].src = `img/${arr12[0][0]}`
    div12max.children[0].src = ''
    p12text.textContent = ''
}

function reset12() {
    div12max.children[0].style.display = 'none'
    images12min.forEach(load12)
}

window.addEventListener("load", reset12)


function t12(e) {
    div12wrapper.children[0].classList.add('active-img')
    div12max.children[0].style.display = 'block'
    div12max.children[0].src = e.target.src
    p12text.textContent = `${arr12[current12][1]}`
}

function slider() {
    images12min[0].src = `img/${arr12[current12][0]}`

    if (images12min[0].src != div12max.children[0].src) {
        div12wrapper.children[0].classList.remove('active-img')
        p12text.textContent = ''
    } else {
        div12wrapper.children[0].classList.add('active-img')
        p12text.textContent = `${arr12[current12][1]}`
    }
}

images12min.forEach(function (img) {
    img.addEventListener('touchstart', t12)
})


btnPrev.addEventListener('touchstart', function () {
    if (current12 - 1 === -1) {
        current12 = arr12.length - 1
    } else {
        current12--
    }
    slider()
})

btnNext.addEventListener('touchstart', function () {
    if (current12 + 1 === arr12.length) {
        current12 = 0
    } else {
        current12++
    }
    slider()
})

btnReset.addEventListener('touchstart', reset12)