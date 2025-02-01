import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  student = {
    name: 'Sowmi',
    year: 3,
    summary: 'Enthusiastic learner with a passion for technology and innovation.',
    skills: [
      'JavaScript',
      'Angular',
      'Python',
      'Machine Learning',
      'Data Structures'
    ],
    achievements: [
      'Won 1st place in Hackathon 2023',
      'Completed AWS Certification',
      'Published research paper on AI in healthcare'
    ],
    targetsAchieved: [
      'Completed 100 hours of coding practice',
      'Built a full-stack web application',
      'Led a team in project development'
    ],
    cgpa: 8.9
  };
}
