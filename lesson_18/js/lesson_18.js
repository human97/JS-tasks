// #01
const btn1 = document.querySelector('.btn1')
const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11]
const t1 = () => {
    let newArr1 = []
    arr1.forEach(e => {
        newArr1.push(e * 2)
    })
    console.log(newArr1)
}

btn1.addEventListener('click', t1)


// #02
const btn2 = document.querySelector('.btn2')
const arr2 = [2, 3, 4, 5, 10, 11, 12]
const t2 = () => {
    let newArr2 = []
    arr2.forEach(e => {
        newArr2.push(e / 2)
    })
    console.log(newArr2)
}

btn2.addEventListener('click', t2)


// #03
const btn3 = document.querySelector('.btn3')
const arr3 = [2, "hello", 3, "hi", 4, "Mazai"]
const t3 = () => {
    let newArr3 = []
    arr3.forEach(e => {
        if (typeof e === 'number') {
            newArr3.push(e)
        }
    })
    console.log(newArr3)
}

btn3.addEventListener('click', t3)


// #04
const btn4 = document.querySelector('.btn4')
const spans4 = document.querySelectorAll('.span4')
const t4 = () => {
    let newArr4 = []
    spans4.forEach(e => {
        newArr4.push(e.getAttribute('data-span'))
    })
    console.log(newArr4)
}

btn4.addEventListener('click', t4)