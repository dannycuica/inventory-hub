import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier-management',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './supplier-management.html',
  styleUrl: './supplier-management.css'
})
export class SupplierManagement {
  private fb = inject(FormBuilder);

  supplierForm = this.fb.group({
    supplierName: ['', Validators.required],
    contactInformation: ['', Validators.required],
    streetAddress: ['', Validators.required],
    zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
    city: ['', Validators.required],
    state: ['', Validators.required],
    averageLeadTime: [0, [Validators.required, Validators.min(0)]]
  });

  submitForm() {
    if (this.supplierForm.valid) {
      alert('Supplier information submitted successfully.');
    }
  }
}