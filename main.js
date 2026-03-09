// alert("задание 1") ДЗ ПО ИП
// let qwe =10
// alert(qwe)
// qwe =20
// alert(qwe)

// alert("задание 2")
// let qwe =10
// let ewq =2
// alert(qwe+ewq)
// alert(qwe-ewq)
// alert(qwe*ewq)
// alert(qwe/ewq)

// alert("задание 3")
// let qwe =10
// let ewq =5
// const result=qwe+ewq
// alert(result)

// alert("задание 4")
// let qwe =1
// let ewq =2
// let rty =3
// alert(qwe+ewq+rty)

// alert("задание 5")
// let a=10
// let b=5
// const c=a+b
// alert(c)
// let d=7
// alert(c+d)

const hg = 10
const resh = '#'
const zve = '*'

for (let i=0;i<=hg;i++) {
    if (i % 2 != 0) {
    console.log(`${zve.repeat(i)}`)
    }
    else if (i % 2 == 0) {
        console.log(`${resh.repeat(i)}`)
    }
    else {
        stop
    }
}
console.log('||')






function even(n, x, y) {
   if (x > 0 || y > 0) {
    if (z = (n / x) % y == 0) {
        console.log(true)
    }
    else (
        console.log(false)
    )
   }
}

even(12, 3, 3)





function countSandwiches(bread, cheese) {
    bread /= 2
    console.log(Math.min(bread, cheese))
}
countSandwiches(5, 1)





function absCount(count) {
    if (count < 0) {
        console.log(`${count*-1}`)
    } else {
        console.log(count)
    }
}
absCount(-100)



function convertTemperature(temp, to) {
    if (to == 'ToC') {
        console.log(`${temp = (temp - 32) / 1.8}`)
    } else if (to == 'ToF') {
        console.log(`${temp = temp * 1.8 + 32}`)
    }
}
convertTemperature(32, 'ToF')




function randomNumber(min, max) {
    console.log(Math.floor(Math.random() * (max - min)) + min)
}
randomNumber(0,10)





function sliceArray(array, count) {
    const max = array.length
    const min = 0
    let value = Math.floor((Math.random() * (max - min)) - count)
    if (value < 0) {
        value = value*-1
    }
    console.log(value)
    const end = count+value
    console.log(`${array.slice(value, end)}`)
}

sliceArray([1,2,2,3,23,443,3,3], 3)




function leng(name) {
    return name.length == 2
}
function filterArray(array, filter) {
    const arr = array.map(String)
    console.log(arr.filter(filter))
}
filterArray([12,325,3765,6], leng)





function toBeCloseTo(num1, num2) {
    z = 0.1
    equal = Math.abs(num1 - num2 + z) < Number.EPSILON
    console.log(equal)
}
toBeCloseTo(0.1,0.4)