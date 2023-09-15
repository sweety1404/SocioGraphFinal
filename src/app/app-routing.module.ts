import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierDetailsComponent } from './supplierdetails/supplierdetails.component';

const routes: Routes = [
  { path: 'suppliers', component: SupplierDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

