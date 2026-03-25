import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ScrollRevealService } from '../services/scroll-reveal.service';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit {
  @Input() revealDelay: number = 0;

  constructor(
    private el: ElementRef<HTMLElement>,
    private revealService: ScrollRevealService
  ) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    el.classList.add('reveal');
    if (this.revealDelay) {
      el.style.transitionDelay = `${this.revealDelay}ms`;
    }
    this.revealService.observe(el);
  }
}
