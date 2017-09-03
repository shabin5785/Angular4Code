import { Directive,ElementRef,OnInit } from '@angular/core';


@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    //addig private is an TS shortcut to make the argument an attribtue of the class
    constructor( private elementRef : ElementRef){

    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}


