import { Component, OnInit, Output } from '@angular/core';
import { Task } from 'src/models/task.model';
import TaskService from 'src/services/taskService.service';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  task: Task;
  constructor(private service: TaskService) {
    this.task= new Task("","",false,0);
   }

  ngOnInit(): void {
  }
  addItem(){
    this.service.post(this.task).subscribe((response) => {
      console.log(response);
    })
  }

}
