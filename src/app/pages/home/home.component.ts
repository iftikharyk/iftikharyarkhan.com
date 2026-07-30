import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  stats = [
    { value: 7, suffix: '+', label: 'Years Experience' },
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 20, suffix: '+', label: 'Technologies' },
    { value: 30, suffix: '+', label: 'Articles Written' }
  ];

  animatedValues: number[] = [0, 0, 0, 0];
  private observer!: IntersectionObserver;
  private countersAnimated = false;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupRevealObserver();
      this.setupCounterObserver();
    }
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private setupRevealObserver() {
    const reveals = this.el.nativeElement.querySelectorAll('.reveal');

    if (typeof IntersectionObserver === 'undefined') {
      reveals.forEach((el: Element) => el.classList.add('revealed'));
      return;
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach((el: Element) => obs.observe(el));
  }

  private setupCounterObserver() {
    const statsEl = this.el.nativeElement.querySelector('.stats-grid');
    if (!statsEl) return;

    if (typeof IntersectionObserver === 'undefined') {
      this.countersAnimated = true;
      this.animateCounters();
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.countersAnimated) {
        this.countersAnimated = true;
        this.animateCounters();
      }
    }, { threshold: 0.3 });
    this.observer.observe(statsEl);
  }

  private animateCounters() {
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.stats.forEach((stat, i) => {
        this.animatedValues[i] = Math.round(stat.value * eased);
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
}
