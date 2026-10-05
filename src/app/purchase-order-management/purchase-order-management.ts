import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-order-management',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './purchase-order-management.html',
  styleUrl: './purchase-order-management.css'
})
export class PurchaseOrderManagement {
  private fb = inject(FormBuilder);

  purchaseOrderForm = this.fb.group({
    supplier: ['', Validators.required],
    product: ['', Validators.required],
    quantity: [1, [Validators.required, Validators.min(1)]],
    unitCost: [0, [Validators.required, Validators.min(0)]],
    orderDate: ['', Validators.required],
    expectedDate: ['', Validators.required],
    status: ['Pending', Validators.required],
    notes: ['']
  });

  submitForm() {
    if (this.purchaseOrderForm.valid) {
      alert('Purchase order created successfully.');
    }
  }
}