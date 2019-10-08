// #01
a = 7
b = 9
console.log(a * b)

// #02
c = 7
d = 9
document.querySelector('.result2').textContent = c / d

// #03
e = 3
f = 5
document.querySelector('.result3').textContent = e + f

// #04
e1 = '3'
f1 = 5
console.log(e1 + f1)
document.querySelector('.result4').textContent = e1 + f1
/* т.к. переменная e1 является строкой, то произошла конкатенация строк */

// #05
e2 = 3
f2 = 0
document.querySelector('.result5').textContent = e2 / f2

// #06
e3 = 3
f3 = 'Hello'
document.querySelector('.result6').textContent = e3 + f3

// #07
e4 = 3
f4 = 'Hello'
document.querySelector('.result7').textContent = e4 * f4

// #08
document.getElementById('btn8').onclick = () => {
    console.log(document.getElementById('input8').value)
}

// #09
document.getElementById('btn9').onclick = () => {
    const inp9 = document.getElementById('input9')
    document.querySelector('.result9').textContent += inp9.value
    inp9.value = ''
}

// #10
document.getElementById('btn10').onclick = () => {
    const inp10 = document.getElementById('input10').value
    document.querySelector('.result10').textContent += inp10 * 10
}

// #11
document.getElementById('btn11').onclick = () => {
    const inp11 = document.getElementById('input11').value
    document.querySelector('.result11').textContent += inp11 + '10'
}

// #12
document.getElementById('btn12').onclick = () => {
    const name = document.getElementById('name')
    const lastName = document.getElementById('lastName')
    document.querySelector('.result12').textContent += name.value + ' ' + lastName.value
    name.value = ''
    lastName.value = ''
}

// #13
document.getElementById('btn13').onclick = () => {
    const num1 = document.getElementById('num1')
    const num2 = document.getElementById('num2')
    document.querySelector('.result13').textContent += num1.value * num2.value
    num1.value = ''
    num2.value = ''
}

// #14
let inp14 = document.getElementById('input14')
inp14.value = 'Hello'
console.log(inp14.value)

// #15
let y = document.getElementById('input15')
y.style.border = '2px solid red'

// #16
let num16_1 = document.getElementById('num16-1')
let num16_2 = document.getElementById('num16-2')
let result16 = document.querySelector('.result16')
document.getElementById('btn16').onclick = () => {
    result16.textContent = 'A + B = '
    result16.textContent += +num16_1.value + +num16_2.value
}

// #17
document.getElementById('btn17').onclick = () => {
    let t = document.getElementById('inp17').value
    t = parseInt(t)
    console.log(t)
}

// #18
document.getElementById('btn18').onclick = () => {
    let t = document.getElementById('inp18').value
    t = parseInt(t)
    console.log(t)
}

// #19
document.getElementById('btn19').onclick = () => {
    let inpVal19_1 = document.getElementById('num19-1').value
    let inpVal19_2 = document.getElementById('num19-2').value
    inpVal19_1 = parseFloat(inpVal19_1)
    inpVal19_2 = parseFloat(inpVal19_2)
    console.log(inpVal19_1, inpVal19_2)
    document.querySelector('.result19').textContent = '-A + -B = ' + (inpVal19_1 + inpVal19_2)
}

// #20
document.getElementById('btn20').onclick = () => {
    let name20 = document.getElementById('name20').value
    let lastName20 = document.getElementById('lastName20').value
    let age20 = document.getElementById('age20').value
    let prof20 = document.getElementById('prof20').value
    document.querySelector('.result20').textContent = `  Уважаемый ${name20} ${lastName20}. 
     Ваш возраст ${age20}.
     Ваша профессия ${prof20}`
}