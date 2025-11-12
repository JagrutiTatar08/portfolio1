import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Finance Tracker',
      shortDesc: 'A full-stack personal finance tracker to manage income, expenses, budgets, and visualize insights using interactive charts.',
      image: 'https://img.freepik.com/free-vector/accounting-concept-illustration_114360-190.jpg?w=740&t=st=1730969100~exp=1730972700~hmac=ff3c6fef3b841c6b7a07c03f3b8793c183729ff79d3f8f4d9e2146d3029b01d4',
      link: 'https://github.com/DivyeshGawad/finance-tracker'
    },
    {
      title: 'Hotel Management System',
      shortDesc: 'End-to-end hotel management app for room booking, staff handling, guest check-ins, and digital record maintenance.',
      image: 'https://img.freepik.com/free-vector/hotel-booking-concept-illustration_114360-2570.jpg?w=740&t=st=1730970847~exp=1730974447~hmac=1e71a2b7d724e34a3cdd9db9159d7a64625a1b8a83501b28f6a6e9a6ebef1f9b',
      link: 'https://github.com/DivyeshGawad/Hotel-Management'
    },
    {
      title: 'Portfolio Website',
      shortDesc: 'A modern, responsive portfolio website built using Angular, PrimeNG, and Tailwind showcasing my projects, skills, and contact info.',
      image: 'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1671.jpg?w=740&t=st=1730970940~exp=1730974540~hmac=50f49ea76a6928cf76b3b58c983fef2bcb14dc8ea0e3311da5da390a0da4d059',
      link: 'https://yourportfolio.com'
    },
    {
      title: 'Garbage Management System',
      shortDesc: 'A smart waste tracking solution for monitoring garbage collection schedules, complaint management, and route optimization.',
      image: 'https://img.freepik.com/free-vector/clean-city-concept-illustration_114360-4687.jpg?w=740&t=st=1730971104~exp=1730974704~hmac=f139a8722493d9207aefb47051b37e6b8619a9b0d16cc80783e228b826463209',
      link: 'https://github.com/DivyeshGawad/Garbage-Management-System'
    }
  ];
}
