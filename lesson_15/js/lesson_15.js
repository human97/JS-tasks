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
})