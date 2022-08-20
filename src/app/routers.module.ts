import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from "./app.component";

const appRouters : Routes = [
    {path : "list", component: AppComponent}
];
export const routing = RouterModule.forRoot(appRouters);