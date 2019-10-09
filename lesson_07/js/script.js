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