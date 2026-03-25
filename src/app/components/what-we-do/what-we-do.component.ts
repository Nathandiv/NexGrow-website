import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Pillar {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-what-we-do',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent {
  pillars: Pillar[] = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>`,
      title: 'Structured Learning',
      description: 'Practical tools and guided programmes that turn raw ideas into validated, sustainable business models.',
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>`,
      title: 'Community Support',
      description: 'A purpose-driven community of like-minded individuals who encourage, challenge, and uplift one another.',
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>`,
      title: 'Meaningful Impact',
      description: 'We empower people to create ventures that matter — building legacies that extend far beyond profit.',
    },
  ];
}