import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { SupplierlistComponent } from './supplierlist/supplierlist.component';
import { AppRoutingModule } from './app-routing.module';
import { SupplierDetailsComponent } from './supplierdetails/supplierdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule } from '@angular/forms';
// import { AddUserComponent } from './add-user/add-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    // SupplierlistComponent,
    SupplierDetailsComponent,
    // UpdateSupplierComponent,
    // AddSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
