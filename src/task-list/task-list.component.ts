import { Component, Input, OnInit } from '@angular/core';
import taskService from 'src/services/taskService.service';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
@Input() tasksList: Task[];
  constructor(private service : taskService) {
    this.tasksList = []; 
    
  }

  ngOnInit(): void {
    this.service.get().subscribe( (response) => {
      this.tasksList = response as Task[];
    });

  
  }
  deleteHandler(id: number){
   this.tasksList = this.tasksList.filter(item => item.id != id);
  }

}
