



const inputBox = document.querySelector(".inputField input");
console.log(inputBox);
const addBtn=document.querySelector(".inputField button");
const todoList=document.querySelector(".todo-list");
const DeleteAllBtn=document.querySelector(".footer button");



addBtn.onclick = ()=>{

    let userData = inputBox.value;
    let getLocalStorage=localStorage.getItem("New Todo");
    if(getLocalStorage==null) 
    {
        listArr=[];
    }
    else
    {
        listArr= JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));

    showTasks();
}

function showTasks()
{
    let getLocalStorage=localStorage.getItem("New Todo");
    if(getLocalStorage==null) 
    {
        listArr=[];
    }
    else
    {
        listArr= JSON.parse(getLocalStorage);
    }
    const pending=document.querySelector(".pending");

    pending.textContent=listArr.length;

   

    let newLiTag='';



    listArr.forEach((element,index)=>{
        newLiTag+=`<li>${element}<span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
        

    });

    todoList.innerHTML = newLiTag;
    inputBox.value='';
}

function deleteTask(index)
{
   let getLocalStorage = localStorage.getItem("New Todo");
   listArr= JSON.parse(getLocalStorage);
   listArr.splice(index,1);
   localStorage.setItem("New Todo",JSON.stringify(listArr));

    showTasks();
}

DeleteAllBtn.onclick=()=>{
    listArr=[];
    localStorage.setItem("New Todo",JSON.stringify(listArr));

    showTasks();
}
