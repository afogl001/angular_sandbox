import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})

export class DirectivesComponent implements OnInit {
  // For ngIf/ngFor example
  forLoop: string[] = ["First element", "Second element", "Third element"];  // Array of strings to iterate over
  isChecked = false;  // Two way binding defaults to box not being checked, defaulting box to unchecked on start

  // For ngIf w/ Button Toggle.
  oddNumbers = [1, 3, 5];  // Starting list of odd numbers
  evenNumbers = [2, 4];  // Starting list of even numbers
  numbers:any = [];  //  Empty array used to store result of concatenating the oddNumbers and evenNumbers arrays
  onlyOdd = false;  //  Used to toggle off and on so it NEEDS a value to start with (toggle will invert current value)
  
  // For ngSwitch example.
  mySwitchValue!: number;  // Prop to store value passed with "value=X" element binding. Not setting the value here will tell template to use whatever specified in ngSwitchDefault

  constructor() { }

  ngOnInit(): void {
    this.numbers = this.oddNumbers.concat(this.evenNumbers);  // Part of ngIf w/ Button Toggle, combines the odd and even arrays for a complete list of numbers
  }

}
