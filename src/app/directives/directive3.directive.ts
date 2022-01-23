import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[myDirective3]'
})
export class MyDirective3 {


  @HostBinding('style.backgroundColor') backgroundColor: string = 'grey';  
  // 'style.backgroundColor' is DOM property, don't use background-color, cane we use '.value'?

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'silver'
    // Background color when mouse is hovered over
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
    // Background once mouse moves away (note this is now default color until ngOnInit re-runs)
  }

}


/* 
This version is better compared to "directives2.directive.ts" by using @HostBinding 
  - to simplify setting properties
  - Can set default w/o needing to pass something in ngOnInit 
*/
