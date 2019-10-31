// #01
let arr1 = []
const inp1 = document.querySelector('.inp1')
const btn1 = document.querySelector('.btn1')
const div1 = document.querySelector('.div1')
let inp1Val
btn1.onclick = function () {
    inp1Val = inp1.value
    arr1.push(inp1Val)
    div1.textContent = arr1
}


// #02
const btn2 = document.querySelector('.btn2')
btn2.onclick = function () {
    arr1.pop()
    div1.textContent = arr1
}


// #03
const btn3 = document.querySelector('.btn3')
btn3.onclick = function () {
    inp1Val = inp1.value
    arr1.shift(inp1Val)
    div1.textContent = arr1
}