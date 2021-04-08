let timeSheetData = [
    {
        project : 'learn FE',
        task : 'learn HTML',
        timeSpent : '6'
    },
    {
        project : 'learn FE',
        task : 'learn CSS',
        timeSpent : '8'
    },
    {
        project : 'learn FE',
        task : 'learn Js variables and data types',
        timeSpent : '6'
    },
    {
        project : 'learn git',
        task : 'learn git basics',
        timeSpent : '2'
    }
]
console.log(timeSheetData)

let getBody = document.getElementById('body-table')
console.log(getBody)

for(let i = 0; i < timeSheetData.length; i++){
    getBody.insertAdjacentHTML('beforeend',`<tr class="tr-table"><td >${timeSheetData[i].project}</td><td >${timeSheetData[i].task}</td><td >${timeSheetData[i].timeSpent}</td></tr>`)
}

let tr0 = document.getElementById('tr-0')
tr0.remove()

let p = document.getElementById('project')
let t = document.getElementById('task')
let s = document.getElementById('time')
function add(){
    timeSheetData.push({project: p.value ,task: t.value,timeSpent : s.value})
    getBody.insertAdjacentHTML('beforeend',`<tr><td>${p.value}</td><td>${t.value}</td><td>${s.value}</td></tr>`)
}

let action = document.querySelector('thead tr')
// console.log(action)
action.insertAdjacentHTML('beforeend', `<th>Actions</th>`)

let btnX = document.querySelectorAll('tr.tr-table')
console.log(btnX[0])

let btnAdd = document.getElementById('btn-add')
btnAdd.insertAdjacentHTML('afterend','<button id="btn-update" >Update</button> <button id="btn-clear" onclick="clear()">Clear</button>')
let btnUpdate = document.getElementById('btn-update')
btnUpdate.style.display = 'none'
let btnClear = document.getElementById('btn-clear')

for(let i = 0; i < btnX.length; i++){
    // console.log(btnX[0])
    btnX[i].insertAdjacentHTML('beforeend', `<td><button onclick="delete${i}()">x</button><button id="u${i}" class="btn-u" >U</button></td>`)
    function delete0(){
        btnX[0].remove()
    }
    function delete1(){
        btnX[1].remove()
    }
    function delete2(){
        btnX[2].remove()
    }
    function delete3(){
        btnX[3].remove()
    }
}



btnClear.addEventListener('click',function(){
    let f = document.getElementById('form-input')
    f.reset()
    btnAdd.style.display = 'block'
    btnUpdate.style.display = 'none'
})

let btnListU = document.querySelectorAll('.btn-u')
// console.log(btnListU)
for (let i = 0; i < btnListU.length; i++){
    btnListU[i].addEventListener('click',function(){
        p.value = timeSheetData[i].project
        t.value = timeSheetData[i].task
        s.value = timeSheetData[i].timeSpent
        btnAdd.style.display = 'none'
        btnUpdate.style.display = 'block'
    })
    
    
}

btnUpdate.addEventListener('click',function(){
    let newP = p.value
    let newT = t.value
    let newS = s.value

    for(let i = 0; i < btnX.length; i++){
        btnX[i].innerHTML = `<tr class="tr-table">
        <td>${newP}</td>
        <td>${newT}</td>
        <td>${newS}</td>
        <td><button onclick="delete${i}()">x</button><button id="u${i}" class="btn-u" >U</button></td>
        </tr>`
    }   
})
