import { Component } from '@angular/core';
import { InventoryManagement } from './inventory-management/inventory-management';
import { SalesManagement } from './sales-management/sales-management';
import { SupplierManagement } from './supplier-management/supplier-management';
import { PurchaseOrderManagement } from './purchase-order-management/purchase-order-management';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InventoryManagement,
    SalesManagement,
    SupplierManagement,
    PurchaseOrderManagement
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}