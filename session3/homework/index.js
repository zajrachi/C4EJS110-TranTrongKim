function ex1(){
    let a = 5
    let b = 1
    let c 
    c = a
    a = b
    b = c
    console.log(a, b)
    let x = 4
    let y = 8
    x = x + y
    y = x - y
    x = x - y
    console.log(x, y)   
}
//ex1()
function ex2(){
    let a = 'Are you free tonight ?'
    let b = a.split(" ")
    console.log(b)
}
//ex2()
function ex3(){
    const a = [4, 5, 7, -8];
    console.log(...a);
}
// ex3()
function ex4(){
    var items = ['Jean','T-Shirt','Socks']
    while(true){
        var shop = prompt('Hi, Wellcome to my shop, what do u want?(C ,R , U, D)')
        if(shop == 'c'){
            let newItem = prompt('Enter the name of the new item :')
            items.push(newItem)
            alert('Done !')
        }
        else if (shop == 'u'){
            let indexItems = Number(prompt('Enter the position you want to update:'))
            let valueItems = prompt('Enter the new name :')
            items[indexItems - 1] = valueItems
            alert('Done !')
        }else if(shop == 'd'){
            let indexItems = Number(prompt('Enter the position you want to delete:'))
            items.splice((indexItems - 1), 1)
            alert('Done !')
        }else if(shop == 'r'){
            console.log('The current items are:')
            for(let i = 0; i < items.length; i++){
                console.log(` ${i+1}. ${items[i]} `)        
            }
            break       
        }else if(shop == 'r'){
            console.log('The current items are:')
            for(let i = 0; i < items.length; i++){
                console.log(` ${i+1}. ${items[i]} `)        
            }
            break
        }
        else{
            alert('This command is not supported')
        }
    }
}
// ex4()
function ex5(){
    let inputNumber = prompt('Enter a squence of Number, separrated by commas (,)')
    let arr = inputNumber.split(',')
    for(let i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i])
    }
    let sum = arr.reduce((a, b)=> a + b, 0)
    alert(`The sum of them is ${sum}`) 
}
// ex5()

function ex6() {
    let inputNumber = prompt('Enter a squence of Number, separrated by commas (,) ')
    let arr = inputNumber.split(',')
    for(let i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i])
    }
    let minNum = Math.min(...arr)
    alert(`The smallest  number is ${minNum} `)
}
// ex6()
function ex7() {
    let arr = [1,2,3,4,5,6,7,8,9]
    let searchNum = Number(prompt('Enter a number :'))
    if(arr.includes(searchNum) == true){
        alert(`${searchNum} is FOUND in my array at index ${arr.indexOf(searchNum)} `)
    }else{
        alert(`${searchNum} is NOT FOUND in my array`)
    }  
}
// ex7()
function ex8() {
    let arr = [10, 34, 42, 5, 2, 29]
    //*****************8*********** */
    console.log('*Hello i am Kim and here is my sheep sizes:*')
    for (let i = 0; i <arr.length; i++) {
        console.log(arr[i])
    }
    //***************************** */
    let maxSize = Math.max(...arr)
    console.log(`*My biggest sheep has size ${maxSize}*`)
    //***************************** */
    let indexSize = arr.indexOf(maxSize)
    arr.splice(indexSize,1, 8)
    console.log('*After shearing , here is my flock :*')
    for (let i = 0; i <arr.length; i++) {
        console.log(arr[i])
    }
    //***************************** */
    let month1 = arr.map(x => x + 50)
    console.log(`MONTH 1 : \n\After 1 month my sheep have grown ,here are their size :`)
    for (let i = 0; i <month1.length; i++) {
        console.log(month1[i])
    }
    //**************************** */
    let month4 = arr.map(x => x + 200)
    console.log(`MONTH 4 : \n\After 4 month my sheep have grown ,here are their size :`)
    for (let i = 0; i <month4.length; i++) {
        console.log(month4[i])
    }
    //**************************** */
    let sumSize = month4.reduce((a,b)=> a + b)
    console.log(`My flock has size in total : ${sumSize} \n\I would get ${sumSize} * 2$ = ${sumSize*2}`)
}
// ex8()
function ex10() {
    let inputName = prompt('Enter a sequence of names:')
    let x = inputName.split(',')
    let y = x.map(j => `<${j}>` )
    console.log(`${inputName} => ${y}`)
}
// ex10()
function ex11() {
    let inputNum = prompt('Enter a sequence number:')
    let x = inputNum.split(',')
    let arr =[]
    for (let i = 0; i < x.length ; i++){
        x[i] = parseInt(x[i])    
    }
    for(let j = 0; j < x.length; j++){
        if(x[j] % 2 !== 0){
            arr.push(x[j])
        }
    }
    console.log(`${inputNum} => ${arr}`)
}
// ex11()