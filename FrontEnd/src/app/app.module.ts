import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { TaskComponent } from './task-Management/task/task.component';
import { CreateTaskComponent } from './task-Management/create-task/create-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

import { TasktableComponent } from './task-Management/tasktable/tasktable.component';
import { TaskFormComponent } from './task-Management/task-form/task-form.component';
import { EditTaskComponent } from './task-Management/edit-task/edit-task.component';
import { StepperComponent } from './stepper/stepper.component';
import { AnotherStepperComponent } from './another-stepper/another-stepper.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    TaskComponent,
    CreateTaskComponent,
    TasktableComponent,
    TaskFormComponent,
    EditTaskComponent,
    StepperComponent,
    AnotherStepperComponent,
    DemoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
