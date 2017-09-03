import { Directive,Renderer2,OnInit,ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

    @Input() defaultColor : string ='transparent';
    @Input() highlightColor : string ='blue';

  constructor(private elRef : ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    //set staring color here.
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color',this.defaultColor);
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
  }

  @HostListener('mouseenter') onmouseenter(eventRef: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color',this.highlightColor);
  } 

  @HostListener('mouseleave') onmouseleave(eventRef: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color',this.defaultColor);
  } 

}
