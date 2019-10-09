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