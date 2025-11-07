import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,DialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
//  projects = [
//     {
//       title: 'HR Management Portal',
//       desc: 'A full-stack HR portal with employee management, attendance, and announcements.',
//       tech: ['Angular', 'PrimeNG', 'Spring Boot', 'MongoDB'],
//       link: 'https://github.com/your-repo/hr-portal',
//       icon: 'pi pi-briefcase'
//     },
//     {
//       title: 'E-Commerce Store',
//       desc: 'Responsive e-commerce website with cart, checkout, and payment integration.',
//       tech: ['Angular', 'Node.js', 'Express', 'MongoDB'],
//       link: 'https://github.com/your-repo/ecommerce',
//       icon: 'pi pi-shopping-cart'
//     },
//     {
//       title: 'Portfolio Website',
//       desc: 'Personal portfolio with interactive animations and responsive design.',
//       tech: ['Angular', 'PrimeNG', 'Bootstrap'],
//       link: 'https://github.com/your-repo/portfolio',
//       icon: 'pi pi-user'
//     }
//   ];
  projects = [
    {
      title: 'HR Portal',
      shortDesc: 'Employee management with attendance & leaves.',
      image: 'https://view.subpage.app/app/company/C532b8873cc5442e2b1f2265b77a7d7dc/domain/MTiT0jFlGh/page/Ma9aQb2DGh/article/M52e59e269bfbc6d871027a280eb17cb21721814253357/hero/M4cd31c583ffb66e17295695c64b440bd1722590762244.webp',
      link: 'https://github.com/yourusername/hrportal'
    },
    {
      title: 'Finance Tracker',
      shortDesc: 'Personal finance dashboard with charts & insights.',
      image: 'https://img.freepik.com/free-vector/people-starting-business-project_23-2148866842.jpg?semt=ais_incoming&w=740&q=80',
      link: 'https://github.com/yourusername/financetracker'
    },
    {
      title: 'Portfolio Website',
      shortDesc: 'Interactive portfolio built with Angular & Tailwind.',
      image: 'https://media.istockphoto.com/id/856926238/photo/woman-s-figure-and-a-man-s-hand-holding-pen-they-are-pointing-to-business-chart-at-the-same.jpg?s=612x612&w=0&k=20&c=gQflNUK3Lpyb6MRB2d2mob_-GYRX2KTZYkO1w5xTtJ0=',
      link: 'https://yourportfolio.com'
    },
    {
      title: 'Finance Tracker',
      shortDesc: 'Personal finance dashboard with charts & insights.',
      image: 'https://img.freepik.com/free-vector/people-starting-business-project_23-2148866842.jpg?semt=ais_incoming&w=740&q=80',
      link: 'https://github.com/yourusername/financetracker'
    },
  ];
}
