// #01
document.querySelector('button').onclick = function () {
    alert('Task 1')
}

// #02
document.querySelector('input[type=button]').onclick = function () {
    alert('Task 2')
}

// #03
document.querySelector('#p3').onclick = function () {
    alert('Task 3')
}

// #04
let chb4 = document.getElementById('checkbox4')
document.getElementById('btn4').onclick = function () {
    alert(chb4.checked)

}

// #05
let chb5 = document.getElementById('checkbox5')
let chb5Val = chb5.value
document.getElementById('btn5').onclick = function () {
    if (chb5.checked === true) {
        alert(chb5Val)
    } else {
        alert(chb5.checked)
    }
}

// #06
let hidd6 = document.getElementById('hidden6')
let hidd6Val = hidd6.value
document.getElementById('btn6').onclick = function () {
    alert(hidd6Val)
}

// #07
let pass7 = document.getElementById('pass7')

document.getElementById('btn7').onclick = alertPass

pass7.addEventListener('keydown', function (e) {
    if (e.keyCode === 13)
        alertPass()
})

function alertPass() {
    if (pass7.value.length <= 6) {
        console.log('Ваш пароль менее 6 символов')
    } else {
        alert(pass7.value)
    }
    pass7.value = ''
}

// #08
let div8 = document.getElementById('div8')
let btn8 = document.getElementById('btn8')
let inp8
let btn8_1
btn8.onclick = function () {
    div8.innerHTML = ` <input type="text" id="inp8">
<button id="btn8-1">innerHTML</button>
`
    inp8 = document.getElementById('inp8')
    btn8_1 = document.getElementById('btn8-1')
    btn8_1.onclick = function () {
        alert(inp8.value)
    }
}

// #09
let inpR9 = document.getElementById('inpR9')
let btn9 = document.getElementById('btn9')

btn9.onclick = function () {
    alert(inpR9.checked ? inpR9.value : inpR9.checked)
}

// #10
let inp10 = document.getElementById('inp10')
let btn10 = document.getElementById('btn10')
let task10 = document.querySelector('.task10')
let inp10Val
btn10.onclick = function () {
    inp10Val = inp10.value
    task10.style.backgroundColor = inp10Val
}

// #11
let inp11_1 = document.getElementById('inp11-1')
let inp11_2 = document.getElementById('inp11-2')
let btn11 = document.getElementById('btn11')

btn11.onclick = function () {
    inp11_2.value = inp11_1.value
}

// #12
let inp12 = document.getElementById('inp12')
let div12 = document.getElementById('div12')
let btn12 = document.getElementById('btn12')

btn12.onclick = function () {
    div12.textContent = inp12.value
}

// #13
let inp13 = document.getElementById('inp13')
let div13 = document.getElementById('div13')
let btn13 = document.getElementById('btn13')

btn13.onclick = range13

inp13.oninput = range13

function range13() {
    div13.textContent = inp13.value
}

// #14
let text14 = document.getElementById('text14')
let div14 = document.getElementById('div14')
let btn14 = document.getElementById('btn14')

btn14.onclick = textarea14

text14.oninput = textarea14

function textarea14() {
    div14.textContent = text14.value
}


// #15
let inp15 = document.getElementById('inp15')
let text15 = document.getElementById('text15')
let btn15 = document.getElementById('btn15')
let div15 = document.getElementById('div15')

btn15.onclick = textarea15

function textarea15() {
    text15.textContent = inp15.value
    div15.textContent = inp15.value
}

inp15.onclick = function () {
    inp15.value = ''
    text15.textContent = ''
    div15.textContent = ''
}

// #16
let sel16 = document.getElementById('sel16')
let div16 = document.getElementById('div16')
let btn16 = document.getElementById('btn16')
btn16.onclick = function () {
    div16.textContent = sel16.value
}

// #18
const sel18 = document.getElementById('sel18')
sel18.onchange = function () {
    div18.textContent = sel18.value
}

// #19
const inp19 = document.getElementById('inp19')
const pass19 = document.getElementById('pass19')
const btn19 = document.getElementById('btn19')
let inp19Val
let pass19Val
btn19.onclick = function (e) {
    e.preventDefault()
    inp19Val = inp19.value
    pass19Val = pass19.value
    console.log(inp19Val, pass19Val)
}

// #20
const form20 = document.forms.form20
const inp20 = form20.elements.inp20
const pass20 = form20.elements.pass20
const btn20 = form20.elements.btn20
let inp20Val
let pass20Val
btn20.onclick = function (e) {
    e.preventDefault()
    inp20Val = inp20.value
    pass20Val = pass20.value
    console.log(inp20Val, pass20Val)
}