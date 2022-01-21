import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  fromOutput: String | undefined;
  fromInput!: String;
  inputBox = 'MyText';

  constructor() { }

  ngOnInit(): void {
  }

}
