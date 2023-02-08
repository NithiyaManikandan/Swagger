import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CreateTaskComponent } from "./task-Management/create-task/create-task.component";
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";
import { TaskComponent } from "./task-Management/task/task.component";
import { EditTaskComponent } from "./task-Management/edit-task/edit-task.component";
import { DemoComponent } from "./demo/demo.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: FormComponent,
  },
  {
    path: "edit/:id",
    component: FormComponent,
  },
  {
    path: "table",
    component: TableComponent,
  },
  {
    path: "task",
    component: TaskComponent,
  },
  {
    path: "taskId",
    component: CreateTaskComponent,
  },
  {
    path: "editTask/:id",
    component: EditTaskComponent,
  },
  {
    path: "demo",
    component: DemoComponent,
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
