import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'Customer';
import { CustomerServiceService } from 'CustomerService.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Create',
  templateUrl: './Create.component.html',
  styleUrls: ['./Create.component.css']
})
export class CreateComponent implements OnInit {

  successMsg: string|null=null;
  customer : Customer;


  constructor(private CustomerServiceObj: CustomerServiceService,private router:Router) {
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

  ngOnInit() {

  }

  onSubmit(form: NgForm)
  {
    console.log("form clicked")
    if (form.valid)
    {
      const formData= form.value;
      console.log(formData);
      this.CustomerServiceObj.insertCustomer(formData).subscribe(
        Response=>{
          console.log('Customer Added Successfully: ',Response);
          form.resetForm();
          this.successMsg="Customer Record Added Successfully";
          this.router.navigate(['/main/Success'],{ state: { message: this.successMsg } });

        },
        error=>{
          console.log('Error on Adding Customer ',error);
          this.successMsg="Failed to Add Customer Record";
          this.router.navigate([('/main/errorMsg')],{ state: { message: this.successMsg , routeto:'/main/create',Msg:'Back to Create'} });

        }

      )


    }

  }




}

