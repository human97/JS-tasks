// #01

let set1 = new Set()
set1.add(0)
set1.add(55)
set1.add('yes')
set1.add('#')

console.log(set1)


// #02
const inp2 = document.querySelector('.inp2')
const btn2 = document.querySelector('.btn2')

btn2.addEventListener('click', () => {
    set1.add(inp2.value)
    console.log(set1)
    inp2.value = ''
})


// #03
const btn3 = document.querySelector('.btn3')
btn3.addEventListener('click', () => {
    let inp2VT = inp2.value.trim()
    if (inp2VT.length === 0) {
        alert('input is empty')
    } else {
        set1.delete(inp2VT)
        console.log(set1)
    }
    inp2.value = ''
})


// #04
const btn4 = document.querySelector('.btn4')
const t4 = () => {
    let inp2V = +inp2.value
    console.log(set1.has(inp2V))
}

btn4.addEventListener('click', t4)


// #05
const btn5 = document.querySelector('.btn5')
const div5 = document.querySelector('.div5')

btn5.addEventListener('click', () => div5.innerHTML = `${set1.size}`)