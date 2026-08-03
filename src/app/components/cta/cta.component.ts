import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cta',
  imports: [],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css',
})
export class CtaComponent {
  copied = signal(false);

  copyEmail() {
    navigator.clipboard.writeText('contact@iftikharyarkhan.com');
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }
}
