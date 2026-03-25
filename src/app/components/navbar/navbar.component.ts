import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  navLinks: NavLink[] = [
    { label: 'About',      href: '#about' },
    { label: 'Benefits',   href: '#benefits' },
    { label: 'Programmes', href: '#programmes' },
    { label: 'Contact',    href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }

  scrollTo(href: string): void {
    this.mobileOpen.set(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
