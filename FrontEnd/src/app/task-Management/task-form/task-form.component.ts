import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  taskForm !:FormGroup
  constructor(private fb:FormBuilder) { 
    this.taskForm = this.fb.group({
      taskname: ['', [Validators.required]],
      description:['', [Validators.required]],
      aproximateHour:['', [Validators.required]],
      section:this.fb.group({
        sectionName : [''],
        sectionDescription : [''],
        question : this.fb.group({
          
        })
      })
    })
  }

  ngOnInit(): void {
  }

}
