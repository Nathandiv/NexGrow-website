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

   async submitForm(form: NgForm) {
    if (form.invalid) return;

    const formData = new FormData();
    formData.append('access_key', '09fab436-101e-409e-976b-c88c17a97cd2');
    formData.append('subject', 'New Subscriber');
    formData.append('from_name', 'Website Footer');
    formData.append('email', form.value.email);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      console.log('Subscription response:', result);

      if (result.success) {
        this.success = true;
        form.resetForm();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert(` Subscription failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Network error. Please try again later.');
    }
  }
}
