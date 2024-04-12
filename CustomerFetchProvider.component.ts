import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomerServiceService } from 'CustomerService.service';

@Component({
  selector: 'app-CustomerFetchProvider',
  templateUrl: './CustomerFetchProvider.component.html',
  styleUrls: ['./CustomerFetchProvider.component.css']
})
export class CustomerFetchProviderComponent implements OnInit {

  constructor(private service:CustomerServiceService,private router:Router) {}
  successMsg:string|null=null;
  customers : any[] = [];
  filterForm = new FormGroup({
    start : new FormControl(),
    end : new FormControl()
  })


  ngOnInit() {
  }

  onsubmit()
  {
    this.service.fetchCustomerWithProvider(this.filterForm).subscribe(
      (response) => {
        console.log(this.filterForm);
        console.log("Success", response);
        this.successMsg="Success";
        this.customers = response;
      },
      (error) => {
        console.log("Error:", error);
        this.router.navigate([('/main/errorMsg')],{ state: { message:"Invalid" , routeto:'/main/SearchByCommission',Msg:'Back to Search'} });

      }
    );
  }

}

