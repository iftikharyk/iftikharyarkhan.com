import { Component, signal, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { BentoGridComponent } from './components/bento-grid/bento-grid.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { JourneyComponent } from "./components/journey/journey.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    BentoGridComponent,
    CtaComponent,
    FooterComponent,
    JourneyComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit() {
    // Page Title
    this.titleService.setTitle('Iftikhar Yar Khan | Senior Backend & Distributed Systems Engineer');

    // Standard SEO Meta Tags
    this.metaService.addTags([
      { name: 'description', content: 'Senior Backend Engineer with 7+ years of experience in Node.js, TypeScript, PostgreSQL, and distributed systems supporting 22k+ active users.' },
      { name: 'keywords', content: 'Iftikhar Yar Khan, Backend Engineer, Node.js, TypeScript, PostgreSQL, Distributed Systems, Microservices, System Architecture, Angular' },
      { name: 'author', content: 'Iftikhar Yar Khan' },
      { name: 'robots', content: 'index, follow' },

      // Open Graph / LinkedIn / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Iftikhar Yar Khan - Senior Backend & Distributed Systems Engineer' },
      { property: 'og:description', content: 'Architecting scalable backend platforms, high-throughput microservices, and real-time workflows.' },
      { property: 'og:url', content: 'https://iftikharyarkhan.com' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Iftikhar Yar Khan | Senior Backend Engineer' },
      { name: 'twitter:description', content: '7+ years experience building fault-tolerant backend infrastructure and enterprise databases.' }
    ]);
  }
  
}
