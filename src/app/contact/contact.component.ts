import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {TextareaModule} from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  loading = false;

  serviceID = 'service_bjv3f4u';
  templateID = 'template_21vhppp';
  publicKey = 'riMJLpLnIS4-4fcst';

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Incomplete Form',
        detail: 'Please fill all fields before submitting!'
      });
      return;
    }

    this.loading = true;
    const { name, email, message } = this.contactForm.value;

    const templateParams = {
      name: name,
      email: email,
      message: message
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.publicKey)
      .then(() => {
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Message Sent 🎉',
          detail: 'Your message has been delivered successfully!'
        });
        this.contactForm.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Failed to Send',
          detail: 'Something went wrong. Please try again later.'
        });
      });
  }
}