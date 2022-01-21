import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
/* export class DirectivesComponent {
  //numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
} */
export class DirectivesComponent implements OnInit {
  forLoop: string[] = ["First element", "Scond element", "Third element"];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  numbers:any = [];
  onlyOdd = false;
  isChecked = false;

  constructor() { }

  ngOnInit(): void {
    this.numbers = this.oddNumbers.concat(this.evenNumbers);
  }

}
