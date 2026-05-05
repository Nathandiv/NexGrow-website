import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
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



async submitForm(ngForm: NgForm) {
  if (ngForm.invalid) return;

  
  const formData = new FormData();
  formData.append('access_key', '0ce97a11-9a0a-45e4-a188-f490a42b85cc');
  formData.append('subject', 'New Application - NexGrow');
  formData.append('from_name', 'NexGrow Website');
  
  // Add all form fields
  formData.append('name', this.form.name);
  formData.append('surname', this.form.surname);
  formData.append('email', this.form.email);
  formData.append('programme', this.form.programme);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();
    console.log('Application response:', result);

    if (result.success) {
      this.submitted.set(true);
      ngForm.resetForm();
      this.form = { name: '', surname: '', email: '', programme: '' }; // Reset model too
      
      // Optional: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert(`Submission failed: ${result.message || 'Please try again.'}`);
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('Network error. Please try again later.');
  }
}
}
