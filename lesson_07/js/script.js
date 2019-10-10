// #01
function consoleName() {
  console.log('Alex')
}

document.querySelector('#btn01').onclick = consoleName

// #02
const btn02 = document.querySelector('#btn02')

function consoleName02(name) {
  console.log(name)
}

btn02.onclick = function () {
  consoleName02('Sergey')
}

/* // тоже самое, стрелочная функция
const consoleName002 = name => {
  console.log(name)
}

btn02.onclick = () => consoleName002('Sergey')
*/

// #03

const num003 = num => {
  console.log(num * 10)
}

btn03.onclick = () => num003(7)

/*
function num03(num) {
  console.log(num * 10)
}

const btn03 = document.querySelector('#btn03')
btn03.onclick = function () {
    num03(5)
  }
  */

// #04
const btn04 = document.querySelector('#btn04')
/*
const colorRed004 = () => {
  btn04.style.backgroundColor = 'red'
}

btn04.onclick = () => colorRed004()
*/
function colorRed04() {
  btn04.style.backgroundColor = 'red'
}

btn04.onclick = colorRed04

// #05
const btn5 = document.getElementById('btn5')
const inp5 = document.getElementById('inp5')

/*
const name05 = () => {
  return inp5.value
}

btn5.onclick = () => console.log(name05())
*/

function name5() {
  return inp5.value
}

btn5.onclick = function () {
  console.log(name5())
}

// #06
const btn6 = document.getElementById('btn6')

function returnNum06(num1, num2) {
  if (num1 > num2) {
    return num1
  } else if (num1 < num2) {
    return num2
  } else {
    return (num1 || num2)
  }
}

btn6.onclick = function () {
  console.log(returnNum06(80, 80))
}

/*
const returnNum006 = (num1, num2) => {
  return num1 >= num2 ? num1 : num2
}

btn6.onclick = () => console.log(returnNum006(80, 90)) 
*/

// #07
const btn7 = document.querySelector('.btn7')
/*
function yearBorn07(born) {
  return console.log(2019 - born)
}

btn7.onclick = function () {
  yearBorn07(1900)
}
*/
const yearBorn007 = born => {
  return console.log(2019 - born)
}

btn7.onclick = () => yearBorn007(1919)


// #08
const btn8 = document.querySelector('.btn8')

// Получение случайного числа в заданном интервале
/*function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}*/

// Получение случайного *Целого* числа в заданном интервале
/*function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}*/

// Получение случайного Целого числа в заданном интервале, *Включительно*
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
/*
btn8.onclick = function () {
  console.log(getRandomIntInclusive(1, 10))
}*/

// упрощенный вариант со стрелочной функцией
const getRandomIntInclusiveS = () => {
  let min = Math.ceil(1)
  let max = Math.floor(10)
  return console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1)
}

btn8.onclick = () => getRandomIntInclusiveS()


// #09
const btn9 = document.querySelector('.btn9')
// функция getRandomIntInclusive описанна выше
btn9.onclick = function () {
  console.log(getRandomIntInclusive(1, 1000))
}

// #10
const div10 = document.querySelector('.div07_10')
let color1
let color2
let color3
let rgbColor10 = ''
/*
div10.onclick = function () {
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      color1 = getRandomIntInclusive(0, 255)
    } else if (i === 1) {
      color2 = getRandomIntInclusive(0, 255)
    } else {
      color3 = getRandomIntInclusive(0, 255)

    }
    rgbColor10 = `rgb(${color1}, ${color2}, ${color3})`
  }

  div10.style.backgroundColor = `${rgbColor10}`
}*/

const rgbColor10Str = () => `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)})`

div10.onclick = () => {
  div10.style.background = rgbColor10Str()
}