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

// #07
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

btn6.onclick = () => console.log(returnNum006(80, 90)) *
  /