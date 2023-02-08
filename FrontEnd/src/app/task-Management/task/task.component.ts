import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  openTask(){
    this.route.navigate(['/taskId'])

  }
}
