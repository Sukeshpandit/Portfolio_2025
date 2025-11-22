import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  
  getProjects(): Project[] {
    return [
      {
        title: 'Beauty Parlor Management System',
        description: 'Full-stack beauty parlor management system with Python, Flask, MySQL, HTML, and CSS with Bootstrap',
        image: '/BPMS/BPMS_2.png',
        technologies: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
        link: '#',
        github: 'https://github.com/Sukeshpandit/BeautyParlor-Management-system-?tab=readme-ov-file'
      },
      {
        title: 'Social Media App',
        description: 'Social media application with Angular, Firebase, and Tailwind CSS',
        image: '/social-media/image.png',
        technologies: ['Angular', 'Firebase', 'Tailwind CSS'],
        link: '#',
        github: '#'
      },
      {
        title: 'Weather Dashboard',
        description: 'Real-time weather tracking with interactive maps and forecasts',
        image: '/Weather/image.png',
        technologies: ['Angular', 'Chart.js', 'OpenWeather API'],
        link: '#',
        github: '#'
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      // Languages
      { name: 'JavaScript (ES6+)', level: 95, category: 'Languages', icon: 'fab fa-js-square' },
      { name: 'TypeScript', level: 90, category: 'Languages', icon: 'fab fa-js-square' },
      { name: 'HTML5', level: 95, category: 'Languages', icon: 'fab fa-html5' },
      { name: 'CSS3', level: 90, category: 'Languages', icon: 'fab fa-css3-alt' },
      
      // Frameworks/Libraries
      { name: 'Angular', level: 95, category: 'Frameworks', icon: 'fab fa-angular' },
      { name: 'React', level: 75, category: 'Frameworks', icon: 'fab fa-react' },
      { name: 'Bootstrap', level: 85, category: 'Frameworks', icon: 'fab fa-bootstrap' },
      { name: 'Angular Material', level: 80, category: 'Frameworks', icon: 'fab fa-angular' },
      { name: 'SASS/LESS', level: 85, category: 'Frameworks', icon: 'fab fa-sass' },
      { name: 'jQuery', level: 80, category: 'Frameworks', icon: 'fab fa-js-square' },
      
      // Tools
      { name: 'Git', level: 90, category: 'Tools', icon: 'fab fa-git-alt' },
      { name: 'Postman', level: 80, category: 'Tools', icon: 'fas fa-tools' },
      { name: 'Chrome Dev Tools', level: 85, category: 'Tools', icon: 'fab fa-chrome' },
      { name: 'Webpack', level: 75, category: 'Tools', icon: 'fas fa-cube' },
      { name: 'NPM/Yarn', level: 85, category: 'Tools', icon: 'fab fa-npm' },
      { name: 'Docker', level: 30, category: 'Tools', icon: 'fab fa-docker' },
      { name: 'Cursor', level: 90, category: 'Tools', icon: 'fas fa-code' },
      
      // Concepts
      { name: 'Responsive UI', level: 95, category: 'Concepts', icon: 'fas fa-mobile-alt' },
      { name: 'Cross-Browser Compatibility', level: 90, category: 'Concepts', icon: 'fas fa-globe' },
      { name: 'RESTful APIs', level: 85, category: 'Concepts', icon: 'fas fa-cloud' },
      { name: 'RxJS', level: 85, category: 'Concepts', icon: 'fab fa-js-square' },
      { name: 'Async/Await', level: 90, category: 'Concepts', icon: 'fas fa-clock' },
      { name: 'Unit Testing', level: 80, category: 'Concepts', icon: 'fas fa-bug' },
      { name: 'CI/CD Pipelines', level: 70, category: 'Concepts', icon: 'fas fa-sync' },
      { name: 'Agile Development', level: 85, category: 'Concepts', icon: 'fas fa-users' }
    ];
  }

  getExperience(): Experience[] {
    return [
      {
        title: 'Bachelor of Engineering ',
        company: 'Visvesvaraya Technological University',
        period: '2019 - 2023',
        type: 'Education',
        description: 'Information Science and Engineering | CGPA: 7.82/10'
      },{
        title: 'Web Development Intern',
        company: 'Take It Smart (OPC) Pvt Ltd',
        period: '2020 - 2022',
        type: 'Internship',
        description: 'Built and optimized client- and server-side features using JavaScript (ES6+),Built responsive web applications and collaborated with design teams to create user-friendly interfaces.'
      },{
        title: 'Associate Software Engineer',
        company: 'BizViz Technologies { BDB.ai }',
        period: '2023 - Present',
        type: 'Work',
        description: 'Leading frontend development for enterprise applications using Angular and modern web technologies.'
      },
    ];
  }
}
