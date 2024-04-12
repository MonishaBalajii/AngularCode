import { Router } from '@angular/router';
import { CustomerServiceService } from 'CustomerService.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-FetchAllCustomers',
  templateUrl: './FetchAllCustomers.component.html',
  styleUrls: ['./FetchAllCustomers.component.css']
})
export class FetchAllCustomersComponent implements OnInit {



  constructor(private service:CustomerServiceService,private router:Router) { }
  customers: any[] = [];

  ngOnInit() {
    this.FetchAllCustomerDetails();
  }

  FetchAllCustomerDetails(){
    this.service.fetchAllCustomers().subscribe((data:any[])=>{
      this.customers=data;
      console.log('Customer:',this.customers);
    },
    error => {
      console.error('Error fetching customers:', error);
    }
    );

  }
  navigatetoUpdate(CustomerId:number)
  {
     this.router.navigate([('/main/UpdateCustomer')],{ state: { message:CustomerId} });
  }


}
