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