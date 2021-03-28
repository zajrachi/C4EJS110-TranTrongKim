let question = [
    {
        ques: 'Find the biggest number ?',
        choices: [1,2,3,4],
        rightChoice: 4
    },
    {
        ques: 'Find the smallest number ?',
        choices: [1,2,3,4],
        rightChoice: 1
    },
    {
        ques: 'sum of 2 + 1 ?',
        choices: [1,2,3,4],
        rightChoice: 3
    }
]

alert(`${question[0].ques}\n\ ${question[0].choices.sort(function(){ 
    return Math.random() - .4 
})}`)

