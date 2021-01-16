function getEleId(id) {
    return document.getElementById(id);
}
var task_list = new Task_list();
var validation = new Validation();
const completed = true;
const uncompleted = false;
const localListName = "toDoList";

getLocalStorage(); //Khong truyen duoc tham chieu o JS
createToDoList(task_list.arr);
getEleId("addItem").addEventListener("click", function () {
    var text_task = getEleId("newTask").value;
    var isValid = true;
    isValid &= validation.checkNull(text_task, "notiInput", "(*) Please enter the task name,don't let it empty!") && validation.checkCoincide(text_task, task_list.arr, "notiInput", "(*) The task name is existed, please change!");
    if (!isValid) return;
    var new_task = new Task(text_task, uncompleted);
    task_list.add(new_task);
    setLocalStorage();
    createToDoList(task_list.arr);

})
function createToDoList(arr) {
    var contentUncompleted = "";
    var contentCompleted = "";
    arr.forEach(function (item) {
        if (item.status == uncompleted) {
            contentUncompleted += `
                <li>
                    <span>${item.taskName}</span>
                    <div class="buttons">
                        <button class="remove" onclick="deleteToDo(${item.id})"><i class="fa fa-trash-alt"></i></button>
                        <button class="complete" onclick="changeStatus(${item.id})">
                            <i class="far fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                        </button>
                        
                    </div>
                    
                </li>
            
            `;
        }
        else {
            contentCompleted += `
                <li>
                    <span>${item.taskName}</span>
                    <div class="buttons">
                        <button class="remove" onclick="deleteToDo(${item.id})"><i class="fa fa-trash-alt"></i></button>
                        <button class="complete" onclick="changeStatus(${item.id})">
                            <i class="far fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            
            `;
        }
    })
    getEleId("todo").innerHTML = contentUncompleted;
    getEleId("completed").innerHTML = contentCompleted;
}
function deleteToDo(id) {
    task_list.delete(id);
    alert("Delete Success!");
    setLocalStorage();
    createToDoList(task_list.arr);
}
function changeStatus(id) {
    task_list.changeStatus(id);
    alert("Change Status Success!");
    setLocalStorage();
    createToDoList(task_list.arr);
}
function setLocalStorage() {
    var arrStr = JSON.stringify(task_list.arr);
    localStorage.setItem(localListName, arrStr);
}
function getLocalStorage() {
    if (localStorage.getItem(localListName))
        task_list.arr = JSON.parse(localStorage.getItem(localListName));
}
