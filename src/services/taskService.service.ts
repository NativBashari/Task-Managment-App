import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "src/models/task.model";


@Injectable()
export class TaskService{
    taskList: Task [];
    constructor(private client: HttpClient){
        this.taskList = [];
    }
    get(){
        return this.client.get("http://localhost:3030/tasks");
    }
    getById(id: number){
        return this.client.get("http://localhost:3030/tasks/"+ id);
    }
    post(task: Task){
        return this.client.post("http://localhost:3030/tasks", task);
    }
    delete(id: number){
        return this.client.delete("http://localhost:3030/tasks/"+ id);
    }

}
export default TaskService;