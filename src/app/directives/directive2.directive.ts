import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[myDirective2]'
})
export class MyDirective2 implements OnInit {

  constructor(private myRef: ElementRef, private myRenderer: Renderer2) { }

  ngOnInit() {
    this.myRenderer.setStyle(this.myRef.nativeElement, 'background-color', 'grey')
    //Type "Renderer2" has many more methods than just "setStyle"
    //setStyle takes positional arguments, a "ElementRef" object, style type, and style value. There is a forth optional argument 
    //   but it is rarely used 
  }

}


// This version is better compared to "directives.directive.ts" because doesn't need access to DOM
/* To create a directive via CLI, see the following example:
    ng generate directive directive2 --skip-tests=true
*/