import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() count = 0
  @Output() change = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  decrement(): void {
    this.count--;
    this.change.emit(this.count)
  }

  increment(): void {
    this.count++;
    this.change.emit(this.count)
  }

}
