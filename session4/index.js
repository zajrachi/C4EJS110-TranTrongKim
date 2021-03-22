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
    let a = String(prompt('What do youu want to update?'))
    if(a=='title'){
        let b = prompt('What is the update?')
        movie.title = b
        console.log(movie)
    }else if(a=='year'){
        let b = prompt('What is the update?')
        movie.year = b
    }else if(a=='rate'){
        let b = prompt('What is the update?')
        movie.rate = b
    }else {
        alert(`${a} does not exist in our data, we will add new`)
        
        //movie['a'] = prompt('Enter the new data :')
    }
    console.log(movie)
}
ex4()
