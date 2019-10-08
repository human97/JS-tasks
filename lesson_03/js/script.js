// #01
let a = 4
if (a == 4) {
    console.log('a = 4')
}

// #02
let b = 8
let c = 10
if (b > c) {
    console.let('b > c')
} else {
    console.log('c > b')
}

// #03
if (b > c) {
    console.let('b > c')
} else if (b < c) {
    console.log('c > b')
} else {
    console.log('c = b')
}

// #04
let num4_1 = document.getElementById('num4-1')
let num4_2 = document.getElementById('num4-2')
let result4 = document.querySelector('.result4')
document.getElementById('btn4').onclick = function () {
    let num4_1Val = +num4_1.value
    let num4_2Val = +num4_2.value

    if (num4_1Val > num4_2Val) {
        result4.textContent = num4_1Val
    } else if (num4_2Val > num4_1Val) {
        result4.textContent = num4_2Val
    } else {
        result4.textContent = 'Равны'
    }
}

// #05
let num5 = document.getElementById('num5')
let result5 = document.querySelector('.result5')
document.getElementById('btn5').onclick = function () {
    let num5Val = +num5.value
    if (num5Val < 2000) {
        result5.textContent = 2019 - num5Val
    } else {
        result5.textContent = 'Age'
        console.log(2019 - num5Val)
    }
}

// #06
let num6 = document.getElementById('num6')
let result6 = document.querySelector('.result6')
document.getElementById('btn6').onclick = function () {
    let num6Val = +num6.value
    if (num6Val >= 1 && num6Val <= 32) {
        result6.textContent = 'Квартира № ' + num6Val + ' есть в наличии'
    } else {
        result6.textContent = 'Квартиры № ' + num6Val + ' не существует'
    }
}

// #07
let num7 = document.getElementById('num7')
let result7 = document.querySelector('.result7')
document.getElementById('btn7').onclick = function () {
    let num7Val = +num7.value
    if (num7Val === 0) {
        result7.textContent = 'Число "' + num7Val + '" равно 0'
    } else if (num7Val > 0) {
        result7.textContent = 'Число "' + num7Val + '" больше 0'
    } else {
        result7.textContent = 'Число "' + num7Val + '" меньше 0'
    }
}
num7.onfocus = function () {
    result7.textContent = ''
    num7.value = ''
}

// #08
let num8 = document.getElementById('num8')
let result8 = document.querySelector('.result8')
document.getElementById('btn8').onclick = function () {
    let num8Val = +num8.value
    if (num8Val % 2 === 0) {
        result8.textContent = 'Число "' + num8Val + '" является чётным'
    } else {
        result8.textContent = 'Число "' + num8Val + '" является НЕчётным'
    }
}

// #09
let num9_1 = document.getElementById('num9-1')
let num9_2 = document.getElementById('num9-2')
let result9 = document.querySelector('.result9')
document.getElementById('btn9').onclick = function () {
    let num9_1Val = +num9_1.value
    let num9_2Val = +num9_2.value
    if (num9_1Val != '' && num9_2Val != '') {
        result9.innerHTML = `<p>${num9_1Val}<sup>${num9_2Val}</sup> = ${num9_1Val ** num9_2Val}</p>`
    }
}

// #10
let inp10 = document.getElementById('inp10')
let result10 = document.querySelector('.result10')
document.getElementById('btn10').onclick = function () {
    let inp10Val = inp10.value
    if (inp10Val === '' || inp10Val === ' ') {
        result10.textContent = 'Введите ваше имя'
    } else {
        alert('Hello, ' + inp10Val + '!')
    }
}
inp10.onfocus = () => {
    result10.textContent = ''
    inp10.value = ''
}

// #11
let inp11 = document.getElementById('inp11')
let result11 = document.querySelector('.result11')
document.getElementById('btn11').onclick = function () {
    let inp11Val = inp11.value

    if (inp11Val.length !== inp11Val.trim().length || inp11Val === '') {
        result11.textContent = 'Введите ваше имя'
    } else {
        alert('Hello, ' + inp11Val + '!')
    }
    console.log(inp11Val.length, inp11Val.trim().length)
}
inp11.onfocus = () => {
    result11.textContent = ''
    inp11.value = ''
}

// #12
let num12 = document.getElementById('num12')
document.getElementById('btn12').onclick = function () {
    let num12Val = +num12.value
    switch (num12Val) {
        case 1:
            console.log('один')
            break

        case 2:
            console.log('два')
            break
        case 3:
            console.log('три')
            break
        default:
            console.log('Вы ввели не верное число')
    }
}
num12.onfocus = () => {
    num12.value = ''
}

// #13
let num13 = document.getElementById('num13')
let inp13 = document.getElementById('inp13')
let num13Val
//let inp13Val
num13.onblur = function street() {
    num13Val = num13.value
    if (num13Val >= 1 && num13Val <= 5) {
        inp13.value = 'улица № 1'
    } else if (num13Val >= 6 && num13Val <= 11) {
        inp13.value = 'улица № 2'
    } else if (num13Val >= 11 && num13Val <= 20) {
        inp13.value = 'улица № 3'
    } else if (num13Val < 0 && num13Val > 20) {
        num13.classList.toggle('invalid')
    }
}

num13.onfocus = () => {
    inp13.value = ''
    num13.value = ''
    num13.classList.remove('invalid')
}

// #14
let num14 = document.getElementById('num14') // получили input для ввода кол-ва рентген
let result14 = document.querySelector('.result14') // вывод результатов и предупреждений
let num14Val // переменная данные из input num14

// функция вывода данных
function xRays() {
    num14Val = +num14.value
    if (num14Val < 0 || num14Val > 1000) {
        num14.classList.toggle('invalid')
        result14.textContent = 'Введены не корректные данные'
    } else if (num14Val >= 0 && num14Val <= 25) {
        result14.textContent = 'не обнаруживается'
    } else if (num14Val <= 50) {
        result14.textContent = 'снижение числа лимфоцитов'
    } else if (num14Val <= 100) {
        result14.textContent = 'вялость, рвота'
    } else if (num14Val <= 150) {
        result14.textContent = 'смертность 5%'
    } else if (num14Val <= 350) {
        result14.textContent = 'смертность 50% за 30 суток'
    } else if (num14Val <= 600) {
        result14.textContent = '90% смертность за 2 недели'
    } else { // от 601 до 1000
        result14.textContent = 'DANGER!!!'
        result14.classList.add('invalid')
    }
}

// вывод данных при нажатии клавиши inter в input num14
num14.onkeydown = function (e) {
    if (e.keyCode === 13) {
        xRays()
    }
}

document.getElementById('btn14').onclick = xRays // вывод данных при нажатии кнопки btn14

// при клике на input num14 отчистка его содержимого и div result14, удаление классов у них
num14.onclick = () => {
    num14.value = ''
    result14.textContent = ''
    num14.classList.remove('invalid')
    result14.classList.remove('invalid')
}

// #15
let x = 1
let y = 0
console.log(x && y)
console.log(x || y)

// #16
let num16 = document.getElementById('num16') // получили input для ввода объёма двигателя
let result16 = document.getElementById('result16') // вывод результатов и предупреждений
let btn16 = document.getElementById('btn16')
let num16Val // переменная данные из input num14

// функция вывода данных
function tax() {
    num16Val = +num16.value
    if (num16Val < 0 || num16Val > 2000) {
        num16.classList.toggle('invalid')
    } else if (num16Val <= 500) {
        result16.value = '2525 тенге'
    } else if (num16Val <= 1200) {
        result16.value = '5050 тенге'
    } else if (num16Val <= 1600) {
        result16.value = '8275 тенге'
    } else if (num16Val <= 1900) {
        result16.value = '9675 тенге'
    } else {
        result16.value = '11075 тенге'
    }
}

btn16.onclick = tax

// вывод данных при нажатии клавиши inter в input num14
num16.onkeydown = function (e) {
    if (e.keyCode === 13) {
        tax()
    }
}
num16.onclick = () => {
    num16.value = ''
    result16.value = ''
    num16.classList.remove('invalid')
}

// #17
let num17 = document.getElementById('num17') // получили input для ввода долларов
let sel17 = document.getElementById('sel17') // получили select для выбора валюты
let result17 = document.getElementById('result17') // вывод суммы при конвертации в input(#result17)
let btn17 = document.getElementById('btn17')
let num17Val // переменная данные из input num17
let sel17Val // переменная данные из select.value(#sel17)
let sel17Index // переменная Index из select (#sel17)

// конвертация и вывод результата при клике на кнопку Change(#btn17)
btn17.onclick = switchCase18

// конвертация с помощью значений из value
function selectVal17() {
    num17Val = +num17.value
    sel17Val = +sel17.value
    result17.value = num17Val * sel17Val
}

// конвертация с помощью значений Index
function selectedIndex17() {
    num17Val = +num17.value
    sel17Index = sel17.options.selectedIndex
    console.log(sel17Index)
    if (sel17Index === 0) {
        result17.value = num17Val * .91
    } else if (sel17Index === 1) {
        result17.value = num17Val * 24.06
    } else if (sel17Index === 2) {
        result17.value = num17Val * 64.19
    }
}

num17.onclick = function () {
    num17.value = ''
    result17.value = ''
}

// #18
// конвертация черз switch case
function switchCase18() {
    num17Val = +num17.value
    sel17Index = sel17.options.selectedIndex

    switch (sel17Index) {
        case 0:
            result17.value = num17Val * .91
            break
        case 1:
            result17.value = num17Val * 24.06
            break
        case 2:
            result17.value = num17Val * 64.19
            break
    }
}

// #19
let num19_1 = document.getElementById('num19-1') // получили input для ввода
let num19_2 = document.getElementById('num19-2') // получили input для ввода
let sel19 = document.getElementById('sel19') // получили select для выбора валюты
let result19 = document.getElementById('result19') // вывод результата в div(#result19)
let btn19 = document.getElementById('btn19') // кнопка =
let num19_1Val // переменная данные из input(#num19-1)
let num19_2Val // переменная данные из input(#num19-2)
let sel19Index // переменная Index из select (#sel19)

// функция подсчета через if else
function ifElseIf19() {
    num19_1Val = +num19_1.value
    num19_2Val = +num19_2.value
    sel19Index = sel19.options.selectedIndex
    if (sel19Index === 0) {
        result19.textContent = num19_1Val + num19_2Val
    } else if (sel19Index === 1) {
        result19.textContent = num19_1Val - num19_2Val
    } else if (sel19Index === 2) {
        result19.textContent = num19_1Val / num19_2Val
    } else if (sel19Index === 3) {
        result19.textContent = num19_1Val * num19_2Val
    }
}

btn19.onclick = switchCase19 // нажали на кнопку получили результат:)

// #20
// функция подсчета через switch case
function switchCase19() {
    num19_1Val = +num19_1.value
    num19_2Val = +num19_2.value
    sel19Index = sel19.options.selectedIndex
    switch (sel19Index) {
        case 0:
            return (result19.textContent = num19_1Val + num19_2Val)
        case 1:
            return (result19.textContent = num19_1Val - num19_2Val)
        case 2:
            return (result19.textContent = num19_1Val / num19_2Val)
        case 3:
            return (result19.textContent = num19_1Val * num19_2Val)
    }
}