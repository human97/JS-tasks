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
function t3(event) {
    document.querySelector('.out-3').textContent = event.target.innerHTML[2]
}

document.querySelector('.div-3_1').addEventListener('touchstart', t3)
document.querySelector('.div-3_2').addEventListener('touchstart', t3)


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