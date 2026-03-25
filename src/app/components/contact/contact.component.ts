import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';

interface ContactForm {
  name: string;
  surname: string;
  email: string;
  programme: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitted = signal(false);

  form: ContactForm = {
    name: '',
    surname: '',
    email: '',
    programme: ''
  };

  programmes = [
    { value: 'side-hustle-igniter',   label: 'Side Hustle Igniter' },
    { value: 'side-hustle-amplifier', label: 'Side Hustle Amplifier' },
    { value: 'nexgrow-legacy',        label: 'NexGrow Legacy' },
  ];

  handleSubmit(): void {
    if (this.form.name && this.form.surname && this.form.email && this.form.programme) {
      this.submitted.set(true);
    }
  }
}
