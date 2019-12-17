// #01
const btn1=document.querySelector('.btn1')
const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11]
const t1 = () => {
    let newArr1 = arr1.map(item => item * 2)
    console.log(newArr1)
}

btn1.addEventListener('click', t1)