import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  @ViewChild('viewChild') viewChild!: ElementRef;
  viewChildVar!: String;

  constructor() { }

  ngOnInit(): void {
  }

  viewChildButton(){
    this.viewChildVar = this.viewChild.nativeElement.value;
  }

}
