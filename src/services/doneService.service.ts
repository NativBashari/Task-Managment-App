import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Task} from "../models/task.model";


@Injectable()
export class DoneService{
    doneList : Task[];
    constructor(private client : HttpClient){
        this.doneList = [];
    }
    get(){
        return this.client.get("http://localhost:3030/done");
    }
    post(task: Task){
        return this.client.post("http://localhost:3030/done", task);
    }
    delete(id: number){
        return this.client.delete("http://localhost:3030/done/"+ id);
    }
}
export default DoneService;