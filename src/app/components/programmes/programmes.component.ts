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
      icon: 'image3.svg',
      iconGradient: 'linear-gradient(135deg, #fb923c, #8CC63F)',
      name: 'Side Hustle Igniter',
      tagline: 'Spark Your Idea',
      description: 'Perfect for aspiring entrepreneurs ready to transform a raw idea into a structured concept. Build your foundation with guided tools and mentorship.',
    },
    {
      icon: 'image2.svg',
      iconGradient: 'linear-gradient(135deg, #8CC63F, #34d399)',
      name: 'Side Hustle Amplifier',
      tagline: 'Scale Your Venture',
      description: 'Take your validated idea to the next level. Develop strategies, refine your business model, and grow your venture with confidence.',
      featured: true,
    },
    {
      icon: 'image1.svg',
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
