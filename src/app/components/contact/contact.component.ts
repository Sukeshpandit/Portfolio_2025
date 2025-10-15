import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('contactSection', { static: true }) contactSection!: ElementRef;

  ngOnInit() {
    // Initialize any data or services here
  }

  ngAfterViewInit() {
    this.initAnimations();
  }

  initAnimations() {
    // Contact section animations
    gsap.from(this.contactSection.nativeElement.querySelectorAll('.animate-on-scroll'), {
      scrollTrigger: {
        trigger: this.contactSection.nativeElement,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // Implement form submission logic
    console.log('Form submitted');
  }
}
