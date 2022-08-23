import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '../task-list/task-list.component';
import TaskService from 'src/services/taskService.service';
import { AddItemComponent } from '../add-item/add-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoneListComponent } from '../done-list/done-list.component';
import { HeadComponentComponent } from 'src/head-component/head-component.component';
import DoneService from 'src/services/doneService.service';
import { routing } from './routes';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { BothListsComponent } from '../both-lists/both-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent,
    AddItemComponent,
    DoneListComponent,
    HeadComponentComponent,
    TaskDetailsComponent,
    BothListsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    routing
  ],
  providers: [TaskService,DoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
