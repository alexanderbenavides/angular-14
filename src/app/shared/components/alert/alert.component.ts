import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  msgs1!: Message[];
  private readonly mgs = [
    {severity:'success', summary:'Success', detail:''},
    {severity:'info', summary:'Info', detail:''},
    {severity:'warn', summary:'Warning', detail:''},
    {severity:'error', summary:'Error', detail:''}
];
  @Input() severity: 'success' | 'info' | 'warn' | 'error'= 'success';
  isAlertOpen = false;
  @Input() set open(val: boolean) {
    this.isAlertOpen = val;
    this.msgs1 = this.mgs.filter(obj => obj.severity === this.severity);
  }

  @Output() closeAlert = new EventEmitter<boolean>();
  
  constructor() {}

  ngOnInit() {}

  changeAlertStatus() {
    this.closeAlert.emit(true);
  }

}
