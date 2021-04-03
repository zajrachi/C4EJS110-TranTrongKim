// const container = document.getElementById('list');
// for(let i = 0; i < 3; i++) {
//   container.insertAdjacentHTML('afterend', `<li>${i}</li>`)
// }

function ex1(){
    console.log('1-d,2-a,3-c,4-b')
}
// ex1()




function ex2(){
    var myVar = setInterval(()=>{console.log("Hello world!")}     
    , 2000);
}
// ex2()


function ex3(){
    console.log('3.1 : NO')
    console.log('3.1 : YES')
}
// ex3()


function ex4(){
    let x = document.getElementsByTagName("LI");
    document.getElementById("demo").innerHTML = x[1].innerHTML;
    for(let i=0; i<x.length; i++){
        console.log(x[i].innerHTML)
    }
}
// ex4();

function ex5(){
    let x = document.getElementsByTagName("div");
    document.getElementsByClassName("singer").innerHTML = x[1].innerHTML;
    console.log(x[2])
    for(let i=1; i<x.length; i++){
        console.log(x[i].innerHTML)
    }
}

// ex5()

function ex71() {
    let btn1 = document.getElementById('button1')
    btn1.addEventListener('click', (e) => {
        console.log(e.target)
    });   
    let btn2 = document.getElementById('button2')
    btn2.addEventListener('click', (e) => {
        console.log(e.target)
    });  
    console.log('e.target is the button tag that was clicked')
}
// ex71()


function ex72() {
    let btn1 = document.getElementById('button1')
    btn1.addEventListener('keydown', (e) => {
        console.log(e.key)
    });   
    let btn2 = document.getElementById('button2')
    btn2.addEventListener('keydown', (e) => {
        console.log(e.key)
    });  
    console.log('e.key is the keypad that was pressed by user')
}
// ex72()


function ex8() {
    alert('My name is Kim')
    alert('In this year, I want to become a developer')
}
// ex8()


function ex9(name,wish) {
    alert(`User's name is ${name}`)
    alert(`User's wish is ${wish}`)
}
// ex9('kim','to become a developer')


function ex10(name,wish) {  
    alert(`User's name is ${name}`)
    if(!wish){
        alert('User doesn\'t have any wish')
    }else{
        alert(`User's wish is ${wish}`)
    }
}
// ex10('kim','to become a developer')


function ex11(){
    let a = document.getElementById('btn1')
    console.log(a)
    
    let b = document.getElementById('input1')
    console.log(b)


    a.addEventListener('click',()=>{
        console.log('Upper button clicked')
    })
}
// ex11()
function ex11_5(){
    let b = document.getElementById('title1')
    console.log(b)

    let x = document.getElementById('input1').value
    let a = document.getElementById('btn1')
    a.addEventListener('click',()=>{
       return b.innerHTML = x.toUpperCase()
           
    })   
}
// ex11_5()

let items = ['Backpack','MiBand watch','Ring']
let a = document.getElementById('item_list_ul')
let b = document.getElementById('li2')
let c = document.getElementById('li1')
a.removeChild(c)
a.removeChild(b)

for (let i = 0; i < items.length; i++){
    a.insertAdjacentHTML('beforeend',`<li><span>${items[i]}</span></li>`)

} 

let x = document.getElementsByTagName("LI");
console.log(x[1])

x[0].insertAdjacentHTML('beforeend',`<button id="r1" onclick="remove1()">Remove</button>`)
x[1].insertAdjacentHTML('beforeend',`<button id="r2" onclick="remove2()">Remove</button>`)
x[2].insertAdjacentHTML('beforeend',`<button id="r3" onclick="remove3()">Remove</button>`)



function remove1(){
    console.log('Clicked remove')
    console.log(`Index: 0`)
    items.splice(0, 1)
    console.log(items)
    x[0].remove()
}
function remove2(){
    console.log('Clicked remove')
    console.log(`Index: 1`)
    items.splice(1, 1)
    console.log(items)
    x[1].remove()
}
function remove3(){
    console.log('Clicked remove')
    console.log(`Index: 2`)
    items.splice(2, 1)
    console.log(items)
    x[2].remove()
}

function addNew(){
    let a = document.getElementById('item_list_ul')
    let e = document.getElementById('input2').value
    
    console.log('clicked')
    console.log(e)
    items.push(e)
    console.log(items)
    a.insertAdjacentHTML('beforeend',`<li><span>${e}</span></li>`)
    console.log(a)

}