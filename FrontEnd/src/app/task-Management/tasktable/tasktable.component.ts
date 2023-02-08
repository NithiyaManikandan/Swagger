import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasktable',
  templateUrl: './tasktable.component.html',
  styleUrls: ['./tasktable.component.scss']
})
export class TasktableComponent implements OnInit {
  gridRow: any = []
  taskFormField: any = []
  objectKeys: any = []
  editButton: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.gridRow = [{
      active: 1,
      createdAt: "2022-10-27 06:46:19",
      createdBy: "c004996",
      description: "czcnz",
      formTypeId: "STORE_TASK_117",
      hours: "25.00",
      id: 117,
      label: "n",
      maxEndDate: "2022-10-27",
      maxStartDate: "2022-10-27",
      minEndDate: "2022-10-27",
      minStartDate: "2022-10-27",
      storeCount: 8,
      updatedAt: "2022-10-27 06:46:19",
    }, {
      active:1,
      createdAt:"2022-09-26 09:46:40",
      createdBy:"c004996",
      description:"12",
      formTypeId:"STORE_TASK_103",
      hours:"10.00",
      id:103,
      label:"tes",
      maxEndDate:null,
      maxStartDate:null,
      minEndDate:null,
      minStartDate:null,
      storeCount:0,
      updatedAt:"2022-09-27 09:27:57"
    }]

    this.taskFormField = [
      { 'field': 'formTypeId', 'headerName': 'Task Id' }, { 'field': 'label', 'headerName': 'Name' }, { 'field': 'hours', 'headerName': 'Approx. Hours' }, { 'field': 'description', 'headerName': 'Description' }, { 'field': 'storeCount', 'headerName': 'Store Count' }, { 'field': 'minStartDate', 'headerName': 'Min StartDate' }, { 'field': 'maxStartDate', 'headerName': 'Max StartDate' }, { 'field': 'minEndDate', 'headerName': 'Min EndDate' }, { 'field': 'maxEndDate', 'headerName': 'Max EndDate' }, { 'field': 'createdBy', 'headerName': 'Created By' }, { 'field': 'createdAt', 'headerName': 'Created At' }, { 'field': 'view', 'headerName': 'Edit Task' }, { 'field': 'EDITED'}
    ]
    console.log();
    
  }

  editTask() {
    this.editButton = true
  }
}

