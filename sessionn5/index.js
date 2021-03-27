function ex1(){
    let a = Math.random()
    console.log(a)
}
// ex1()
function ex2(){
    let arr = [2,4,1,0,9,6]
    let a = Math.floor(Math.random()*arr.length)
    console.log(arr[a])
    console.log(Math.random()*arr.length)
}
// ex2()



/////////////////////////////////////////////////////
let arrQuizz = [
    {
        question: '1 + 2 = ?',
        choices: [1,2,3,4],
        rightChoice : 3
    },
    {
        question: '5 + 2 = ?',
        choices: [7,2,9,4],
        rightChoice : 7
    },
    {
        question: '7 + 2 = ?',
        choices: [1,9,3,0],
        rightChoice : 9
    }
]
function ex31() {
    //random a question and user answer

    let ranQues = Math.floor(Math.random()*arrQuizz.length)
    while(true){
        let showQues = Number(prompt(`${arrQuizz[ranQues].question}\n\ ${arrQuizz[ranQues].choices}`))
        if(showQues == arrQuizz[ranQues].rightChoice){
            alert("You're right!")
            break
        }else{
            alert("You're wrong!'")
        }
    }
}
// ex31()
function ex32(){
     //Each question appear one time and user answer and calculate total mark
     let i = 0
     let sum = 0
     while(i<3){
         let showQues = Number(prompt(`${arrQuizz[i].question}\n\ ${arrQuizz[i].choices}`))
         if(showQues == arrQuizz[i].rightChoice ){
             alert("You're right!")
             sum += 1
         }else{
             alert("You're wrong!'")
         }
         i++
     }
     alert(`Your total mark is ${sum}.We dont have any question`)
}
//ex32()

function ex33() {
    let i = 0
    while (i<3){
        let showQues = Number(prompt(`${arrQuizz[i].question}\n\ ${arrQuizz[i].choices}`))
        Math.floor(Math.random()*arrQuizz[i].choices)
        i++
    }
}
//ex33()

function ex34() {
    let arr = ['to', 'be', 'that', 'of','elon', 'to', 'this',
     'now', 'back', 'cool', 'hey', 'love', 'of', 
     'life', 'that', 'rain', 'summer', 'color', 'now',
      'of', 'hat', 'late', 'sorry', 'my', 'team']
    
    let arrFilter = {
    }
    for(let i = 0; i < arr.length; i++){
        if(arrFilter[arr[i]]){
            arrFilter[arr[i]] ++
        }else{
            arrFilter[arr[i]] = 1
        }
        
    }
    console.log(arrFilter)
}
// ex34()


function ex4(){
    const inventory = [
        {
            name: 'HP Envy 13aq',
            price: 21000,
            brand: 'HP',
            quantity: 5,
        },
        {
            name: 'Dell XPS 9370',
            price: 30000,
            brand: 'Dell',
            quantity: 1,
        },
        {
            name: 'Dell Inspiron 3567',
            price: 9300,
            brand: 'Dell',
            quantity: 12,
        },
        {
            name: 'Dell Latitude E5450',
            price: 8600,
            brand: 'Dell',
            quantity: 2,
        },
    
        {
            name: 'Asus Zenbook',
            brand: 'Asus',
            price: 20000,
            quantity: 4,
        },
        {
            name: 'HP Pavilion',
            brand: 'HP',
            price: 14000,
            quantity: 7,
        }
    ]

    let invenByBrand ={
        'HP' : [],
        'Dell' : [],
        'Asus' : [],
    }
    for(let i = 0; i< inventory.length; i++){
        let a = inventory[i]
        let b = a.brand
        
        invenByBrand[b].push(a)
    }
    
    let count = prompt('Which brand?')
    if(count == 'HP'){
        alert(`there are ${invenByBrand[count].length} of ${count} :\n\
        ${invenByBrand[count][0].name}\n\ ${invenByBrand[count][1].name} \n\
        With total price : ${((invenByBrand[count][0].price * invenByBrand[count][0].quantity + invenByBrand[count][1].price * invenByBrand[count][1].quantity)*1000).toLocaleString()} VND`)
    }else if(count == 'Dell'){
        alert(`there are ${invenByBrand[count].length} of ${count} :\n\
        ${invenByBrand[count][0].name}\n\ ${invenByBrand[count][1].name}\n\ ${invenByBrand[count][2].name} \n\
        With total price : ${((invenByBrand[count][0].price * invenByBrand[count][0].quantity + invenByBrand[count][1].price * invenByBrand[count][1].quantity + invenByBrand[count][2].price * invenByBrand[count][2].quantity)*1000).toLocaleString()} VND`)
    }else if(count == 'Asus'){
        alert(`there are ${invenByBrand[count].length} of ${count} :\n\
        ${invenByBrand[count][0].name} \n\
        With total price : ${((invenByBrand[count][0].price * invenByBrand[count][0].quantity)*1000).toLocaleString()} VND`)
    }
}
// ex4()


