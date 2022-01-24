import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[myDirective]'
})

export class MyDirective implements OnInit {
    constructor(private elementRef: ElementRef) {};

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}

// Make sure when you create a directtive from scrach that you add it to "app.module.ts"
/* Example:
    import { MyDirective } from './directives/directives.directive';

    @NgModule({
    declarations: [
        otherComponent1,
        otherComponent2,
        MyDirective
    ],
    imports: [
        ........
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
*/