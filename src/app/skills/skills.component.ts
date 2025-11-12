import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

 skills = [
  // 🧠 Core Programming
  { name: 'Java', icon: 'fa-brands fa-java', color: '#f89820' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },

  // 🎨 Frontend
  { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e34f26' },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952b3' },
  { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
  { name: 'PrimeNG', image: 'assets/icons/PrimeNG.png', color: '#00bcd4' },
  { name: 'PrimeFlex', image: 'assets/icons/PrimeFlex.png', color: '#80deea' },

  // ⚙️ Backend
  { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#6db33f' },
  { name: 'Hibernate', image: 'assets/icons/Hibernate.png', color: '#59666C' },
  { name: 'REST API', image: 'assets/icons/API.png', color: '#00bcd4' },

  // 🗄️ Database
  { name: 'MySQL', icon: 'fa-solid fa-database', color: '#00758f' },
  { name: 'MongoDB', image: 'assets/icons/MongoDB.png', color: '#4db33d' },

  // 🧰 Tools & DevOps
  { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#f1502f' },
  { name: 'GitHub', icon: 'fa-brands fa-github', color: '#fff' },
  { name: 'Docker', icon: 'fa-brands fa-docker', color: '#0db7ed' },

  // ☁️ Cloud
  { name: 'AWS S3', icon: 'fa-brands fa-aws', color: '#ff9900' },
];


  duplicatedSkills: any[] = [];

  ngOnInit(): void {
    // Duplicate array for infinite scroll effect
    this.duplicatedSkills = [...this.skills, ...this.skills];
  }
}
