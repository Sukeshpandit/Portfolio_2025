import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PortfolioDataService, Skill, Experience } from '../../services/portfolio-data.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChild('skillsSection', { static: true }) skillsSection!: ElementRef;
  
  skills: Skill[] = [];
  experience: Experience[] = [];
  selectedCategory: string = 'Languages';
  skillCategories: string[] = ['Languages', 'Frameworks', 'Tools', 'Concepts'];
  filteredSkills: Skill[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit() {
    this.skills = this.portfolioDataService.getSkills();
    this.experience = this.portfolioDataService.getExperience();
    this.filteredSkills = this.skills.filter(skill => skill.category === this.selectedCategory);
  }

  filterSkillsByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredSkills = this.skills;
    } else {
      this.filteredSkills = this.skills.filter(skill => skill.category === category);
    }
    // Re-trigger animations for new filtered skills
    setTimeout(() => {
      this.animateSkillBars();
    }, 100);
  }

  getProgressColor(level: number): string {
    if (level >= 90) {
      return 'linear-gradient(135deg, #1a2ffb, #8832f7)';
    } else if (level >= 75) {
      return 'linear-gradient(135deg, #1a2ffb, #5a1fb8)';
    } else {
      return 'linear-gradient(135deg, #5a7ffb, #8832f7)';
    }
  }

  ngAfterViewInit() {
    this.initAnimations();
  }

  initAnimations() {
    // Section animations
    gsap.from(this.skillsSection.nativeElement.querySelectorAll('.animate-on-scroll'), {
      scrollTrigger: {
        trigger: this.skillsSection.nativeElement,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });

    // Animate skill bars
    this.animateSkillBars();

    // Animate timeline items
    this.animateTimeline();
  }

  animateTimeline() {
    const timelineItems = this.skillsSection.nativeElement.querySelectorAll('.timeline-item');
    timelineItems.forEach((item: any, index: number) => {
      const isLeft = index % 2 === 0;
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          once: true
        },
        x: isLeft ? -30 : 30,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.15,
        ease: 'power2.out'
      });
    });
  }

  animateSkillBars() {
    gsap.utils.toArray('.skill-bar').forEach((bar: any) => {
      const level = parseFloat(bar.dataset.level) || 0;
      gsap.fromTo(bar, 
        { width: 0 },
        {
          width: `${level}%`,
          scrollTrigger: {
            trigger: bar.closest('.skill-item'),
            start: 'top 90%',
            once: true
          },
          duration: 1,
          ease: 'power2.out'
        }
      );
    });
  }
}
