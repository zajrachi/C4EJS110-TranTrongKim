function ex1(){
    console.log('Excercise 1 :')
    console.log('1. var and const are variables in JavaScript')
    console.log('2+3. The scope of variables using var is the function scope or outside the function, globally')
    console.log('The scope of the variables using let is the one-block scope, defined by the {} pair')
    console.log('const is the same as let, but nevertheless const cannot reasign the value')
    console.log('4.   var is used in function-scope and it is redefinable \n \
    let is used in block-scope and it is redefinable \n \
    const is used in block-scope and it is not redefinable')
}
//ex1()

function ex2(){
    console.log('Excercise 2 :')
    console.log('1. Boolean is a data type with one of two possible values, true or false')
    console.log('2. the return result of Boolean is true or false')
}
//ex2()

function ex3(){
    console.log('Excercise 3 :')
    console.log('a  :')  
    for(let i = 0 ; i <7; i++){
        console.log(i)
    }
    console.log('b  :')  
    let n = prompt('Enter a number :')
    for(let j = 0 ; j < n ; j++) {
        console.log(j)
    }
    console.log('c  :') 
    let a = prompt('Enter n :')
    if(3 < a ) {
        for(let g = 3 ; g <a ; g++){
            console.log(g)
        }
    }
    console.log('d  :')
    let b = prompt('Enter n :')
    let c = prompt('Enter c :')
    if( c < b){
        for (let h = c; h <b ; h++) {
            console.log(h)
        }
    }
    console.log('e  :')
    let e = Number(prompt('Enter c :'))
    let d = Number(prompt('Enter n :'))
    
    if(e < d){
        for(let k = e; k < d ; k += 3){
            console.log(k)
        }
    }
    console.log('f  :')
    let f = Number(prompt('Enter c :'))
    let z = Number(prompt('Enter n :'))
    let x = Number(prompt('Enter s :'))
    if(f < z) {
        for(let v = f ; v < z ; v += x){
            console.log(v)
        }
    }
}
//ex3()

function ex4(){
    console.log('Excercise 4 :')  
        let a = Number(prompt('Enter a number :'))
        let gt = 1
        for(let i = a ; i > 0 ; i--){
            gt = gt*i              
        }
        alert(`The factorical of ${a} is ${gt}`) 
}
//ex4()


function ex5(){
    console.log('Excercise 5 :')
    let age = Number(prompt('How old are you?'))
    if(age < 14 ){
        alert('You are old enough to view 14+ content')
    }else {
        alert('Enjoy!')
    }    
}
//ex5()


function ex6(){
    console.log('Excercise 6 :')
    let a = Number(prompt('Enter a number :'))
    if(a < 9/2 && a>0){
        alert('Lower half of 9')
    }else if(a > 9/2 && a<9){
        alert('Higher half of 9')
    }
}
//ex6()

function ex7(){
    console.log('Excercise 7 :')
    let x = Number(prompt('Enter a number x :'))
    let n = Number(prompt('Enter a number n :'))
    if(n > 0 && x>0 && x !== n/2){
        if(x < n/2){
            alert(`${x} is in lower half of ${n}`)
        }else{
            alert(`${x} is in higher half of ${n}`)
        }
    }
}
//ex7()

function ex8(){
    console.log('Excercise 8 :')
    let x = Number(prompt(' x ='))
    if(x % 2 == 0){
        alert(`${x} is an odd number`)
    }else {
        alert(`${x} is an even number`)
    }
}
//ex8()

function ex9(){
    console.log('Excercise 9 :')

    console.log('a :')
    let l = 'L'
    let h = 'H'
    for(let i = 0; i< 3 ; i++){
        console.log(l)
    }
    for(let i = 0; i< 3 ; i++){
        console.log(h)
    }

    console.log('b :')
    let n = Number(prompt('Enter the total number of L\'s and H\'s :'))
    if(n % 2 == 0){
        for(let i = 0; i < n/2 ; i++){
            console.log(l)
        }
        for(let i = 0; i < n/2 ; i++){
            console.log(h)
        }
    }else{
        for(let i = 0; i < n/2 ; i++){
            console.log(l)
        }
        for(let i = 0; i < (n-1)/2 ; i++){
            console.log(h)
        }
    }

    console.log('c :')
    for(i=0; i < 4; i++){
        console.log(0)
        console.log(1)
    }

    console.log('d :')
    let b = Number(prompt('Enter the total number of 1\'s and 0\'s :'))
    for (let i = 0; i < b; ++i) {
        if (i % 2 == 0) {
            console.log("0");
        }
        else {
            console.log("1");
        }
    }
}
//ex9()





