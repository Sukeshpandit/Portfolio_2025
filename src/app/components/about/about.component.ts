import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('aboutSection', { static: true }) aboutSection!: ElementRef;

  ngOnInit() {
    // Initialize any data or services here
  }

  ngAfterViewInit() {
    this.initAnimations();
  }

  initAnimations() {
    // Scroll-triggered animations for about section
    gsap.from(this.aboutSection.nativeElement.querySelectorAll('.animate-on-scroll'), {
      scrollTrigger: {
        trigger: this.aboutSection.nativeElement,
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
}
