import { Directive, ElementRef ,HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appDirColor]'
})
export class DirColorDirective {

  constructor(private elemento:ElementRef) { }
  @HostListener('mouseenter')
  publiconMouseEnter(){
    this.elemento.nativeElement.style.backgroundColor='green'; 
  }
  @HostListener('mouseleave')
  publiconMouseLeave(){
    this.elemento.nativeElement.style.backgroundColor='white';
  }

}
