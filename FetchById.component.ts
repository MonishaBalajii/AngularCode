import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'Customer';

import { CustomerServiceService } from 'CustomerService.service';

@Component({
  selector: 'app-FetchById',
  templateUrl: './FetchById.component.html',
  styleUrls: ['./FetchById.component.css']
})
export class FetchByIdComponent implements OnInit {

  customer:Customer;
  filterForm = new FormGroup({
    CustomerId : new FormControl()
  })

  constructor(private CustomerService:CustomerServiceService,private router:Router) {
    this.customer={
      CustomerId: null,
      CustomerName: "",
      AnnualIncome: null,
      Dob: new Date(),
      Job: "",
      ContactNumber: null,
      AadharNumber: null,
      Street: "",
      City: ""

   }

  }


  OnSubmit() {
    this. CustomerService.fetchById(this.filterForm).subscribe(
      (response) => {
        console.log("Success", response);
        this.customer = response;
      },
      (error) => {
        console.log("Error:", error);
        this.router.navigate([('/main/errorMsg')],{ state: { message: "Customer Record Doesn't Exist" , routeto:'/main/FetchById',Msg:'Back to Fetch By ID'} });

      }
    );
  }

  ngOnInit() {
  }





}
