import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Output() myOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.myOutput.emit('This is my output');
  }

}
