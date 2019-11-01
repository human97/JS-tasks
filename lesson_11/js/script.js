// #01


let arr1 = []
const inp1 = document.querySelector('.inp1')
const btn1 = document.querySelector('.btn1')
const div1 = document.querySelector('.div1')
let inp1Val
btn1.onclick = () => {
    inp1Val = inp1.value
    if (inp1Val.trim() === '') {
        alert('Input data')
        inp1.value = ''
    } else {
        arr1.push(inp1Val.trim())
        div1.textContent = arr1
        inp1.value = ''
    }
}


// #02
const btn2 = document.querySelector('.btn2')
btn2.onclick = () => {
    arr1.pop()
    div1.textContent = arr1
}


// #03
const btn3 = document.querySelector('.btn3')
btn3.onclick = () => {
    arr1.shift()
    div1.textContent = arr1
    inp1.value = ''
}


// #04
const btn4 = document.querySelector('.btn4')
btn4.onclick = () => {
    inp1Val = inp1.value
    if (inp1Val.trim() === '') {
        alert('Input data')
        inp1.value = ''
    } else {
        arr1.unshift(inp1Val.trim())
        div1.textContent = arr1
        inp1.value = ''
    }
}