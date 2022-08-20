import { Component, Input, OnInit } from '@angular/core';
import DoneService from 'src/services/doneService.service';

@Component({
  selector: 'done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {
  @Input() doneList: Task[];
  constructor(private doneService : DoneService) {
    this.doneList = [];
   }

  ngOnInit(): void {
    this.doneService.get().subscribe(response => {
      this.doneList = response as Task[];
    });
  }

}
