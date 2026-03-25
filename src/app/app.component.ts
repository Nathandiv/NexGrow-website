import { Component } from '@angular/core';
import { NavbarComponent }     from './components/navbar/navbar.component';
import { HeroComponent }       from './components/hero/hero.component';
import { WhatWeDoComponent }   from './components/what-we-do/what-we-do.component';
import { BenefitsComponent }   from './components/benefits/benefits.component';
import { ProgrammesComponent } from './components/programmes/programmes.component';
import { ContactComponent }    from './components/contact/contact.component';
import { FooterComponent }     from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    WhatWeDoComponent,
    BenefitsComponent,
    ProgrammesComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <div class="app-shell">
      <app-navbar />
      <main>
        <app-hero />
        <app-what-we-do />
        <app-benefits />
        <app-programmes />
        <app-contact />
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    .app-shell {
      min-height: 100vh;
      background-color: var(--brand-dark);
    }
  `]
})
export class AppComponent {}
