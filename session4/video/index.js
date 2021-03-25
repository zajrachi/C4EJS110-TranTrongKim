function ex1(){
    let movie = {
        title : 'The dark night rises' ,
        year : 2012 ,
        rate : 8.4
    }
}
//ex1()
function ex21(){
    let movie = {
        title : 'The dark night rises' ,
        year : 2012 ,
        rate : 8.4
    }
    console.log(movie.title)
    console.log(movie['title'])
    console.log(movie.year)
    console.log(movie['year'])
    console.log(movie.rate)
    console.log(movie['rate'])

}
//ex21()
function ex22(){
    let movie = {
        title : 'The dark night rises' ,
        year : 2012 ,
        rate : 8.4
    }
    console.log(movie.director)
}
//ex22()
function ex23(){
    let movie = {
        title : 'The dark night rises' ,
        year : 2012 ,
        rate : 8.4
    }
    let a = prompt('What you want to know?:')
    if(a == 'title'){
        alert(movie.title)
    }else if(a == 'year'){
        alert(movie.year)
    }else if(a == 'rate'){
        alert(movie.rate)
    }else{
        alert(`${a} dose not exist in our data`)
    }
}
//ex23()
function ex31(){
    let movie = {
        title : 'The dark night rises' ,
        year : 2012 ,
        rate : 8.4
    }
    movie.rate = 8.7
    console.log(movie)
    movie.rate = movie.rate + 0.5
    console.log(movie)
}
//ex31()
function ex32(){
    let movie = {
        title : 'The dark night rises' ,
        year : 2012 ,
        rate : 8.4
    }
    let a = prompt('What you want to update?')
    
    if(a=='title'){
        let b = prompt('What is the update?')
        movie.title = b
    }else if(a=='year'){
        let b = prompt('What is the update?')
        movie.year = b
    }else if(a=='rate'){
        let b = prompt('What is the update?')
        movie.rate = b
    }
    console.log(movie)
}
//ex32()
function ex4(){
    let movie = {
        title : 'The dark night rises' ,
        year : 2012 ,
        rate : 8.4
    }
    let a = prompt('What do you want to update?')
    if(a=='title'){
        let b = prompt('What is the update?')
        movie.title = b
    }else if(a=='year'){
        let b = prompt('What is the update?')
        movie.year = b
    }else if(a=='rate'){
        let b = prompt('What is the update?')
        movie.rate = b
    }else  {
        alert(`${a} does not exist in our data, we will add new`)
        let newData = prompt('Enter the new data :')
        movie[a] = newData
    }
    console.log(movie)
}
// ex4()
function ex5(){
    let movies = [
        { 
            title: 'End Game',
            year: 2020,
            rate: 7.0  
        },
        { 
            title: 'Iron man',
            year: 2020,
            rate: 7.0  
        },
        { 
            title: 'Spider man',
            year: 2020,
            rate: 7.0  
        }
    ]

    console.log(movies[0])

    console.log('*************************')
    console.log(movies.slice(-1).pop())

    console.log('*************************')
    for(let i = 0; i < movies.length; i++){
        console.log(movies[i])
    }

    console.log('*************************')
    for(let i = 0; i < movies.length; i++){
        console.log('------------------------')
        console.log(movies[i].title)
        console.log(`Year : ${movies[i].year}`)
        console.log(`Rate: ${movies[i].rate}`)
        
    }

    console.log('*************************')
    let a = movies.slice(-1).pop()
    a.rate = a.rate + 0.7
    console.log(a)
}    
// ex5()

function ex6() {
    let movie = {
        title: 'Attack on titans',
        year: 2013,
        rate: 8.8,
        casts: 'Eren Armin Mikasa' 
    }
    console.log(movie.title)
    console.log(`Year: ${movie.year}`)
    console.log(`Rate: ${movie.rate}`)
    console.log(`Casts: ${movie.casts}`)
    console.log('*************************')
    movie.casts = movie.casts + ' Eren'
    console.log(movie)
}
// ex6()

function ex7() {
    let arrMovie = [
        {
            title:'End game' ,
            year: 2000,
            rate:8.0,
            casts:'kim dat trong' 
        },
        {
            title:'Reply' ,
            year: 2000,
            rate:8.0,
            casts:'kim dat trong' 
        },
        {
            title:'Iron man' ,
            year: 2000,
            rate: 8.0,
            casts:'kim dat trong' 
        }
    ]
    for (let i = 0; i < arrMovie.length; i++) {
        console.log('------------------------')
        console.log(arrMovie[i].title)
        console.log(`Year : ${arrMovie[i].year}`)
        console.log(`Rate: ${arrMovie[i].rate}`)
        console.log(`Casts: ${arrMovie[i].casts}`)
    }
}
// ex7()
