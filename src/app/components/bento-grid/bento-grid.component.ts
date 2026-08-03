import { Component } from '@angular/core';

@Component({
  selector: 'app-bento-grid',
  imports: [],
  templateUrl: './bento-grid.component.html',
  styleUrl: './bento-grid.component.css',
})
export class BentoGridComponent {
  coreFocus = [
    { title: 'Distributed Systems', desc: 'Managing complex node clusters and data synchronization.' },
    { title: 'Cron Workflows', desc: 'Automated background job orchestration.' },
    { title: 'Microservices', desc: 'Decoupled architecture for high availability.' },
    { title: 'Security & Auth', desc: 'Hardened API infrastructure and rate limiting.' }
  ];

  apis = [
    { name: 'Stripe', category: 'Payments' },
    { name: 'Plaid', category: 'Financial Sync' },
    { name: 'Twilio', category: 'SMS / Voice' },
    { name: 'Pusher', category: 'Real-Time' },
    { name: 'Calendly', category: 'Scheduling' },
    { name: 'Google Cloud', category: 'Cloud APIs' }
  ];

  languages = ['Node.js', 'Express.js', 'NestJS', 'Angular', 'TypeORM', 'Sequelize', 'Tailwind'];
  databases = ['PostgreSQL', 'OracleSQL', 'MySQL', 'Firebase', 'MongoDB', 'Redis'];
  infrastructure = ['AWS', 'Docker', 'GCP', 'WebSockets', 'RabbitMQ', 'Digital Ocean'];
  management = ['Jira', 'Basecamp', 'Trello', 'Bitbucket', 'GitHub'];
}
