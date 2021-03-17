function init(){
    let movies = ['Reply 1988','Start up','Running man']
}
//init()
function create(){
    let movies = ['Reply 1988','Start up','Running man']
    let newMovie = String(prompt('Enter name of a film:'))
    movies.push(newMovie)
    console.log(movies)
}
//create()
function read(){
    let movies = ['Reply 1988','Start up','Running man']
    let i = Number(prompt('Enter index of movie:'))
    console.log(movies[i])
}
//read()
function update1(){
    let movies = ['Reply 1988','Start up','Running man']
    let movieTitle = String(prompt('Enter movieTitle:'))
    movies[0] = movieTitle
    console.log(movies)

}
//update1()
function update2(){
    let movies = ['Reply 1988','Start up','Running man']
    let movieTitle = String(prompt('Enter movieTitle:'))
    let i = Number(prompt('Enter index of movie:'))
    movies[i] = movieTitle
    console.log(movies)
}
//update2()
function delete1(){
    let movies = ['Reply 1988','Start up','Running man']
    let i = Number(prompt('Enter index of movie:'))
    movies.splice(i, 1)
    console.log(movies)
}
//delete1()
function delete2(){
    let movies = ['Reply 1988','Start up','Running man','Life of Pi','The Advenger']
    let i = Number(prompt('Enter index of movie:'))
    let n = Number(prompt('Enter number of movie you want delete:'))
    movies.splice(i, n)
    console.log(movies)
}
//delete2()
function readAll(){
    let movies = ['Reply 1988','Start up','Running man','Life of Pi','The Advenger','Sweet Home']
    console.log(movies)
    let a = movies.length   
    console.log(movies.slice(0, (a/2)))
    movies.forEach((movie, index)=>{
        console.log(`${index}.${movie}`)
    })
}
//readAll()
function updateAll(){
    let movies = ['Reply 1988','Start up','Running man','Life of Pi','The Advenger','Sweet Home']
    console.log(movies.map(movie => movie.toLowerCase()))
}
//updateAll()
function whileLoop(){
    let username
    while(true){
        username = String(prompt('Enter username :'))
        let a = username.length
        if(a <= 15){            
            alert('Good username')
            break
        }else{
            alert('Pls enter username <= 15 characters')
        }
    }
}
//whileLoop()
function whileLoop2(){
    let answer
    while(true){
        answer = Number(prompt('How many legs does a spider have? \n\
        1. None \n\
        2. 4 legs \n\
        3. 8 legs \n\
        4. 12 legs'))
        if(answer){
            if(answer < 1 || answer > 4){
                alert('Invalide choice, the answer must be 1, 2, 3 or 4')
            }else if(answer !==3){
                alert('Good luck next time')
            }else{
                alert('Bravo, you are correct !!')
                break
            }
        }
    }
}
//whileLoop2()
function advancedExcercise(){
    let a = [9, 100, 45, 33, 9, 56, 100]
    let b = Number(prompt('Enter a number :'))
    a.push(b)
    console.log(a.sort(function(a, b){
        return a - b;
    }))
    let c = []
    let e = []
    for(let i = 0; i < a.length ; i++){
        if(a[i] % 2 == 0){
            c.push(a[i])
        }
        if(a[i] % 2 !== 0){
            e.push(a[i])           
        }
    }
    // dùng hàm set() để mảng trả về các giá trị duy nhất
    c = new Set(c);
    e = new Set(e);

    // dùng spread operator để tách các phần tử ra ngoài object/array 
    let x = [...c]
    console.log(x)
    let y = [...e]
    console.log(y)
}
advancedExcercise()