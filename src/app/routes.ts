import {RouterModule, Routes} from "@angular/router";
import { AddItemComponent } from "src/add-item/add-item.component";
import { BothListsComponent } from "src/both-lists/both-lists.component";
import { TaskDetailsComponent } from "src/task-details/task-details.component";


const appRouters : Routes = [
    {path : "list", component: BothListsComponent},
    {path : "new", component: AddItemComponent},
    {path: "details/:id", component: TaskDetailsComponent}
];
export const routing = RouterModule.forRoot(appRouters);