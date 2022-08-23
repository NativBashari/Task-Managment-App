import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/models/task.model';
import TaskService from 'src/services/taskService.service';

@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  id :string ="";
  task: Task = new Task("","", false,0);
  constructor(private route: ActivatedRoute, private service: TaskService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.service.getById(parseInt(this.id)).subscribe(response => 
        this.task = response as Task
        )
    });
  }

}
