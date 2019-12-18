// #01
const btn1 = document.querySelector('.btn1')
const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11]
const t1 = () => {
    let newArr1 = arr1.map(item => item * 2)
    console.log(newArr1)
}

btn1.addEventListener('click', t1)


// #02
const btn2 = document.querySelector('.btn2')
const arr2 = [2, 3, 4, 5, 10, 11, 12]
const t2 = () => {
    const newArr2 = arr2.map(item => item ** 2)
    console.log(newArr2)
}

btn2.addEventListener('click', t2)


// #03
const btn3 = document.querySelector('.btn3')
const arr3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11]
const t3 = () => {
    const newArr3 = arr3.map(Number)
    console.log(newArr3)
}

btn3.addEventListener('click', t3)


// #04
const btn4 = document.querySelector('.btn4')
const arr4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11]
const t4 = () => {
    const newArr4 = []
    arr4.map(item => {
        if (typeof item === 'number') {
            newArr4.push(item)
        }
    })
    console.log(newArr4)
}

btn4.addEventListener('click', t4)


// #05
const btn5 = document.querySelector('.btn5')
const arr5 = [3, 14, 15, 92]
const t5 = () => {
    const newArr5 = arr5.filter(item => {
        if (item % 2 === 0) {
            return true
        }
    })
    console.log(newArr5)
}

btn5.addEventListener('click', t5)