class Todo {
    constructor()
    {
        this._id = 0;
        this.tasks = [ ];
    }

    addTask(task_text)
    {
        try
        {
            this._id += 1;
            let task = {id : this._id, task: task_text}
            this.tasks.push(task);
            console.log("ok1");
            this.reloadTaskList();
        }
        catch (err)
        {
            alert(err);
        }
    }

    deleteTask(task_id)
    {
        try 
        {
            let newTask = [ ];
            this.tasks.forEach(element => {
                if(element.id != task_id){
                    newTask.push(element);
                }
            });
            this.tasks = newTask;
            this.reloadTaskList();
        }

        catch (err)
        {
            alert(err);
            
        }
    }

    updateTask(task_id,new_task)
    {
        try 
        {
            this.tasks.forEach(element => {
                if(element.id == task_id)
                {
                    element.task = new_task;
                }
            });
            this.reloadTaskList();
        }
        catch (err)
        {
            alert(err);
            
        }
    }

    reloadTaskList()
    {

            var list = document.getElementById('todo_list');
            list.innerHTML = "";
            this.tasks.forEach(element => {
                list.innerHTML +=`<a data-toggle="modal" data-target="#modal_task"><li class="list-group-item list-group-item-action" id='task${element.id}' onclick='modalEvent(${element.id})'> ${element.task} </li></a>`
            });
        
    }

}