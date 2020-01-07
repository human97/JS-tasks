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