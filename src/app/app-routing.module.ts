import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierDetailsComponent } from './supplierdetails/supplierdetails.component';
// import { SupplierlistComponent } from './supplierlist/supplierlist.component';

const routes: Routes = [
  { path: 'suppliers', component: SupplierDetailsComponent },
  // { path: 'suppliers/:id', component: SupplierDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

