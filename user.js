
var todo = new Todo();
function addTask() {
    
    task_text = document.getElementById("task_text").value;
    if(task_text.length > 0)
    {
        todo.addTask(task_text);   
        document.getElementById("task_text").value = "";
    }
}

function deleteTask() {
    task_id = document.getElementById("task_id").value;
    let status = todo.deleteTask(task_id);
}

function updateTask() {
    task_id = document.getElementById("task_id").value;
    new_task = document.getElementById("task_text_edit").value;
    todo.updateTask(task_id,new_task);
}

function modalEvent(_id) {
    todo.tasks.forEach(element => {
        if(element.id == _id)
        {
            document.getElementById("task_text_edit").value = element.task;
            document.getElementById("task_id").value = element.id;
        }
    });
}
