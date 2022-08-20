import { AnimateTimings } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import DoneService from 'src/services/doneService.service';
import {TaskService} from "../services/taskService.service";
import {Task} from "../models/task.model";


@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task: any;
@Output() onDelete : EventEmitter<any> = new EventEmitter<any>();
  constructor(private taskService: TaskService, private doneService: DoneService) { 

  }

  ngOnInit(): void {
  }
deleteItem(id:number){
 this.taskService.delete(id).subscribe(response => 
  this.onDelete.emit(id)
  );
}
taskIsDone(task: Task){
  if(!task.isChecked){
    task.isChecked = true;
    this.doneService.post(task).subscribe(response => {
      console.log(response);
    });
    this.taskService.delete(task.id).subscribe(response =>
      console.log(response));
  }
  else{
    task.isChecked = false;
    this.taskService.post(task).subscribe(response => {
      console.log(response);
    });
    this.doneService.delete(task.id).subscribe(response =>
      console.log(response));
  }

}
}
 