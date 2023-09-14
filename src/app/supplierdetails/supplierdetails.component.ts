import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supplierdetails',
  templateUrl: './supplierdetails.component.html',
  styleUrls: ['./supplierdetails.component.css']
})
export class SupplierDetailsComponent implements OnInit {
  id!: number;
  suppliers:any;

  constructor(private SupplierService: SupplierService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {

   
      
    this.SupplierService.getAll().subscribe(
      (data) => {
        
          console.log(data.data);
          this.suppliers=data.data;
      },
      (error) => {
          console.log(error);
      }
  );

  }

  

}