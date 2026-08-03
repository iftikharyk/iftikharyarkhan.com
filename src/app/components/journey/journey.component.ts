import { Component } from '@angular/core';

interface Job {
  period: string;
  isCurrent: boolean;
  company: string;
  role: string;
  description: string;
}

@Component({
  selector: 'app-journey',
  imports: [],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.css',
})
export class JourneyComponent {
  experiences: Job[] = [
    {
      period: 'Sep 2024 – Present',
      isCurrent: true,
      company: 'Systems Limited',
      role: 'Project Lead / Full Stack Developer',
      description: "Leading frontend & backend teams for 1Link, Pakistan's largest payment switch infrastructure."
    },
    {
      period: 'Jan 2019 – Aug 2024',
      isCurrent: false,
      company: 'Sixlogs Technologies',
      role: 'Lead Software Engineer',
      description: 'Led PEAN/Full Stack web app development, microservices architecture, and cloud deployments.'
    },
    {
      period: 'Mar 2018 – Jan 2019',
      isCurrent: false,
      company: 'Expertek Cyber Solutions',
      role: 'Ex-Founder & Lead Engineer',
      description: 'Developed and maintained responsive and user-friendly web interfaces using HTML, CSS, and JavaScript.'
    }
  ];
}
