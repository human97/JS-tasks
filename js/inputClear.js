// функция очищения input
function inputClear() {
    this.value = ''
}

let inputAll = document.querySelectorAll('input') // получил все input
// цикл на все input при событии onclick вешает функцию 
for (let i = 0; i < inputAll.length; i++) {
    inputAll[i].onclick = inputClear
}
//*********