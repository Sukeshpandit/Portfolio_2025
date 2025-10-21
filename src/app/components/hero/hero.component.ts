import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('heroSection', { static: false }) heroSection!: ElementRef;
  @ViewChild('heroTitle', { static: false }) heroTitleElement!: ElementRef;

  heroTitle = ["SUKESH", "Front-end DEVELOPER"];
  
  currentTitleIndex = 0;
  isTitleTyping = false;

  ngOnInit() {
    // Initialize any data or services here
  }

  ngAfterViewInit() {
    this.initAnimations();
    // Add a small delay to ensure ViewChild elements are available
    setTimeout(() => {
      this.startTitleTypewriterEffect();
    }, 100);
  }

  initAnimations() {
    // Hero section animations
    const tl = gsap.timeline();
    
    tl.from('.hero-title', {
      duration: 1.2,
      y: 100,
      opacity: 0,
      ease: 'power3.out'
    })
    .from('.hero-subtitle', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    }, '-=0.8')
    .from('.hero-description', {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-cta', {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: 'power3.out'
    }, '-=0.4');

    // Floating elements animation
    gsap.to('.floating-element', {
      y: -20,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });

    // Parallax effect for hero background
    gsap.to('.hero-background', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: -100,
      ease: 'none'
    });
  }

  startTitleTypewriterEffect() {
    setTimeout(() => {
      console.log('Starting title typewriter...');
      this.typeTitleText();
    }, 1000); // Start title typewriter earlier
  }


  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadResume() {
    // Implement resume download functionality
    console.log('Downloading resume...');
  }

  typeTitleText() {
    if (this.isTitleTyping) return;
    
    this.isTitleTyping = true;
    const currentTitle = this.heroTitle[this.currentTitleIndex];
    let titleElement = this.heroTitleElement?.nativeElement;
    
    // Fallback to querySelector if ViewChild fails
    if (!titleElement) {
      titleElement = document.querySelector('#heroTitle') as HTMLElement;
    }
    
    if (!titleElement) {
      console.error('Title typewriter element not found!');
      this.isTitleTyping = false;
      return;
    }

    // Clear the text
    titleElement.textContent = '';
    
    // Add cursor
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    cursor.textContent = '|';
    titleElement.appendChild(cursor);

    // Type each character
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < currentTitle.length) {
        // Remove cursor, add character, add cursor back
        cursor.remove();
        titleElement.textContent = currentTitle.substring(0, i + 1);
        titleElement.appendChild(cursor);
        i++;
      } else {
        clearInterval(typeInterval);
        
        // Wait before erasing
        setTimeout(() => {
          this.eraseTitleText();
        }, 2000); // Longer pause for title
      }
    }, 100); // Slower typing for title
  }

  eraseTitleText() {
    let titleElement = this.heroTitleElement?.nativeElement;
    
    // Fallback to querySelector if ViewChild fails
    if (!titleElement) {
      titleElement = document.querySelector('#heroTitle') as HTMLElement;
    }
    
    if (!titleElement) {
      console.error('Title typewriter element not found during erase!');
      return;
    }

    const currentTitle = this.heroTitle[this.currentTitleIndex];
    let i = currentTitle.length;
    
    const eraseInterval = setInterval(() => {
      if (i >= 0) {
        const cursor = document.createElement('span');
        cursor.className = 'typewriter-cursor';
        cursor.textContent = '|';
        
        titleElement.textContent = currentTitle.substring(0, i);
        titleElement.appendChild(cursor);
        i--;
      } else {
        clearInterval(eraseInterval);
        this.isTitleTyping = false;
        
        // Move to next title
        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.heroTitle.length;
        
        // Start typing next title
        setTimeout(() => {
          this.typeTitleText();
        }, 1000); // Longer pause between titles
      }
    }, 50); // Slower erasing for title
  }
}
