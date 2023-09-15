import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-supplierdetails',
  templateUrl: './supplierdetails.component.html',
  styleUrls: ['./supplierdetails.component.css']
})
export class SupplierDetailsComponent implements OnInit {
  id!: number;
  suppliers:any;
  p: number = 1;
  currentPage:number=1;

  constructor(private SupplierService: SupplierService ) { }
  
  ngOnInit() {

   
    this.setPage(1);
    this.SupplierService.getAll().subscribe(
      (data) => {
        
          // console.log(data.data);
          // this.suppliers=data.data;
      },
      (error) => {
          console.log(error);
      }
  );
    }

  setPage(page: number) {
    this.SupplierService.getData(page).subscribe(
      (data) => {
        
          console.log(data.data);
          this.suppliers=data.data;
          this.currentPage=page;
      },
      (error) => {
          console.log(error);
      }
    ) 

  }

  
  }
