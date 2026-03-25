import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Programme {
  icon: string;
  iconGradient: string;
  name: string;
  tagline: string;
  description: string;
  featured?: boolean;
}

@Component({
  selector: 'app-programmes',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})
export class ProgrammesComponent {
  programmes: Programme[] = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>`,
      iconGradient: 'linear-gradient(135deg, #fb923c, #8CC63F)',
      name: 'Side Hustle Igniter',
      tagline: 'Spark Your Idea',
      description: 'Perfect for aspiring entrepreneurs ready to transform a raw idea into a structured concept. Build your foundation with guided tools and mentorship.',
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>`,
      iconGradient: 'linear-gradient(135deg, #8CC63F, #34d399)',
      name: 'Side Hustle Amplifier',
      tagline: 'Scale Your Venture',
      description: 'Take your validated idea to the next level. Develop strategies, refine your business model, and grow your venture with confidence.',
      featured: true,
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/>
      </svg>`,
      iconGradient: 'linear-gradient(135deg, #A8D86A, #fde047)',
      name: 'NexGrow Legacy',
      tagline: 'Rediscover Your Purpose',
      description: 'Designed for retirees and soon-to-retire professionals. Channel your lifetime of experience into a passion-driven venture that creates lasting impact.',
    },
  ];

  scrollToContact(): void {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
