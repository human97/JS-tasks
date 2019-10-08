// #01

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// #02
let div2 = document.querySelector('.div2')
let out2 = ''
for (let i = 1; i <= 10; i++) {
    out2 += i + ' '
}
div2.textContent = out2

// #03
let div3 = document.querySelector('.div3')
let out3 = ''
for (let i = 10; i > 0; i--) {
    out3 += i + ' '
}
div3.textContent = out3

// #04
let div4 = document.querySelector('.div4')
let out4 = ''
for (let i = 0; i <= 10; i += 2) {
    div4.textContent += i + ' '
}
div4.textContent = out4


// #05
let div5 = document.querySelector('.div5')
let out5 = ''
for (let i = 21; i >= 0; i -= 3) {
    out5 += i + ' '
}
div5.textContent = out5

// #06
let div6 = document.querySelector('.div6')
let str6 = '******'
let out6 = ''
for (let i = 0; i < 6; i++) {
    out6 += `<div>${str6}</div>`
}
div6.innerHTML = out6

// #07
let div7 = document.querySelector('.div7')
let inp7 = document.querySelector('.inp7')
let btn7 = document.querySelector('.btn7')
let out7 = ''

btn7.onclick = function () {
    for (let i = +inp7.value; i >= 0; i--) {
        out7 += i + ' '
    }
    div7.textContent = out7
}

// #08-09
let inp8_1 = document.querySelector('.inp8-1')
let inp8_2 = document.querySelector('.inp8-2')
let btn8 = document.querySelector('.btn8')
let div8 = document.querySelector('.div8')
let inp8_1Val
let inp8_2Val
let out9 = ''
btn8.onclick = function () {
    inp8_1Val = +inp8_1.value
    inp8_2Val = +inp8_2.value
    if (inp8_2Val < inp8_1Val) {
        alert(inp8_2Val + ' < ' + inp8_1Val)
    }
    for (let i = inp8_1Val; i <= inp8_2Val; i++) {
        out9 += i + ' '
    }
    div8.textContent = out9
}

// #10
let div10 = document.querySelector('.div10')
let out10 = ''
for (let i = 1901; i <= 1950; i++) {
    if (i % 2 === 0) {
        out10 += `${i} `
    }
}
div10.textContent = out10

// #11
let div11 = document.querySelector('.div11')
div11.textContent = document.querySelectorAll('.one').length

// #12
let divsOne = document.querySelectorAll('.one')
let btn12 = document.querySelector('.btn12')
btn12.onclick = function () {
    for (let i = 0; i < divsOne.length; i++) {
        divsOne[i].style.backgroundColor = 'orange'
    }
}

// #13
let btn13 = document.querySelector('.btn13')
btn13.onclick = function () {
    for (let i = 0; i < divsOne.length; i++) {
        console.log(divsOne[i].textContent)
    }
}

// #14
let inpText = document.querySelectorAll('input[type=text]')
let btn14 = document.querySelector('.btn14')
btn14.onclick = function () {
    for (let i = 0; i < inpText.length; i++) {
        inpText[i].placeholder = 'Введите данные'
    }
}

// #15
let btn15 = document.querySelector('.btn15')
btn15.onclick = function () {
    console.log(inpText.length)
}

// #16
let inpRadio16 = document.querySelectorAll('input[type=radio]')
let btn16 = document.querySelector('.btn16')
let div16 = document.querySelector('.div16')
btn16.onclick = function () {
    for (let i = 0; i < inpRadio16.length; i++) {
        if (inpRadio16[i].checked) {
            div16.textContent = inpRadio16[i].value
            break
        }
    }
}

// #17
let btn17 = document.querySelector('.btn17')
btn17.onclick = () => inpRadio16[0].checked = true


// #18
let btn18 = document.querySelector('.btn18')
let inpTeg18 = document.querySelectorAll('input[name=p1]')
btn18.onclick = function () {
    for (let i = 0; i < inpTeg18.length; i++) {
        inpTeg18[i].value = i
        console.log(inpTeg18[i].value)
    }
}

// #19
let allRadio19 = document.querySelectorAll('input[name=p2]')
let btn19 = document.querySelector('.btn19')
let div19 = document.querySelector('.div19')
btn19.onclick = function () {
    for (let i = 0; i < allRadio19.length; i++) {
        if (allRadio19[i].checked == true) {
            if (+allRadio19[i].value === 6) {
                div19.textContent = true
            } else {
                div19.textContent = false
            }
        }

        /* if (!allRadio19[i].checked) {
             continue
         } else if (+allRadio19[i].value !== 6) {
             div19.textContent = false
         } else {
             div19.textContent = true
         } */
    }
}

// #20
let allRadio20 = document.querySelectorAll('input[name=p3]')
for (let i = 0; i < allRadio20.length; i++) {
    allRadio20[i].oninput=function(){
        console.log('был изменен input')
    }
}