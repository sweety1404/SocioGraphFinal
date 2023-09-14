import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDetailsComponent } from './supplierdetails.component';

describe('SupplierdetailsComponent', () => {
  let component: SupplierDetailsComponent;
  let fixture: ComponentFixture<SupplierDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
