import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventory-management',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inventory-management.html',
  styleUrl: './inventory-management.css'
})
export class InventoryManagement {
  private fb = inject(FormBuilder);

  inventoryForm = this.fb.group({
    productCode: ['', Validators.required],
    productName: ['', Validators.required],
    unitCost: [0, [Validators.required, Validators.min(0)]],
    sellingPrice: [0, [Validators.required, Validators.min(0)]],
    category: ['', Validators.required],
    quantity: [0, [Validators.required, Validators.min(0)]]
  });

  submitted = false;

  submitForm() {
    this.submitted = true;

    if (this.inventoryForm.valid) {
      alert('Product form submitted successfully.');
    }
  }
}