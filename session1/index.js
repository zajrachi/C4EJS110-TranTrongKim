/**
 * Excercise 1 : 
 * 1. In JavaScript, in what cases, you will get the SyntaxError telling you
 * that some of your variables have invalid names? Can you give 3 different 
 * examples of invalid variable names?
 * 2. In JavaScript, how to check a variable data types?
 *
 */
 console.log('Excercise 1.1 :')
 console.log('The variable name is the same as the keyword of Javascript \n \
 Declare a variable that was declared before \n \
 Variable names begin with numbers \n \
 Variable names contain special characters except \_ \and \$') 
 console.log('*******************************')
 console.log('let break let \n \
 year-of-birth \n \
 const 4ever')
 console.log('Excercise 1.2 :')
 console.log('To check data type in Javascript we use the function \'typeof\'')
 
 /**
  * Excercise 2 : 
  */
 console.log('Excercise 2 :')
 console.log('1-b\n \
 2-a\n \
 3-e\n \
 4-c')
 
 /**
  * Excercise 3 : 
  */
 console.log('Excercise 3 :')
 let message = 'Coding is great'
 console.log(message)
 let studentCount = 0
 console.log(studentCount)
 
 /**
  * Excercise 4 : 
  */
 console.log('Excercise 4 :')
 
 message = 'Coding might not be easy, but still great'
 console.log(message)
 
 studentCount = 17
 console.log(studentCount)
 
 let a = message.toLowerCase()
 console.log(a)
 
 studentCount = studentCount + 1
 console.log(studentCount)
 
 /**
  * Excercise 5 : 
  */
 console.log('Excercise 5 :')
 alert('You look so beautiful  <3')
 
 /**
  * Excercise 6 : 
  */
 console.log('Excercise 6 :')
 let yourName = prompt(' My name is Kim . And you ?')
 alert('Hi, ' + `${yourName}`)
 
 /**
  * Excercise 7 : 
  */
 console.log('Excercise 7 :')
 let firstName = prompt('Can I know your first name ?')
 let lastName = prompt('And your last name ?')
 alert('Hi, ' + `${firstName} ` +`${lastName}` )
 
 /**
  * Excercise 8 : 
  */
 console.log('Excercise 8 :')
 let x = prompt('Enter side length of the square :')
 alert('The square area is ' + `${x*x}`)
 
 
 /**
  * Excercise 9 : 
  */
 console.log('Excercise 9 :')
 let o = prompt('Enter the radius of  the circle :')
 let u = Math.PI
 alert('The square area is ' + `${2*u*o}`)
 
 /**
  * Excercise 10 : 
  */
 console.log('Excercise 10 :')
 let c = prompt('Enter the temperature in Celsius :')
 let d = c*5
 let f = d.toFixed(1)
 
 
 alert(`${c}`+'(C) = ' +`${f}` + '(F)')