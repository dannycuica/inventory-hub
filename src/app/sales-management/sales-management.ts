import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sales-management',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sales-management.html',
  styleUrl: './sales-management.css'
})
export class SalesManagement {
  private fb = inject(FormBuilder);

  salesForm = this.fb.group({
    customerName: ['', Validators.required],
    purchaseDate: ['', Validators.required],
    product: ['', Validators.required],
    paymentMethod: ['', Validators.required],
    totalPrice: [0, [Validators.required, Validators.min(0)]]
  });

  submitForm() {
    if (this.salesForm.valid) {
      alert('Sale recorded successfully.');
    }
  }
}