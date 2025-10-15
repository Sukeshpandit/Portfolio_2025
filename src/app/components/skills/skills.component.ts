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
  }

  ngAfterViewInit() {
    this.initAnimations();
  }

  initAnimations() {
    // Skills bars animation
    gsap.utils.toArray('.skill-bar').forEach((bar: any) => {
      const level = bar.dataset.level;
      gsap.from(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 80%'
        },
        width: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.2
      });
    });

    // Section animations
    gsap.from(this.skillsSection.nativeElement.querySelectorAll('.animate-on-scroll'), {
      scrollTrigger: {
        trigger: this.skillsSection.nativeElement,
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
