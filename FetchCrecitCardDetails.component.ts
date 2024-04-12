import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'CustomerService.service';

@Component({
  selector: 'app-FetchCrecitCardDetails',
  templateUrl: './FetchCrecitCardDetails.component.html',
  styleUrls: ['./FetchCrecitCardDetails.component.css']
})
export class FetchCrecitCardDetailsComponent implements OnInit {
  customers:any[]=[];

  constructor(private service:CustomerServiceService) { }

  ngOnInit() {
    this.FetchCreditCardDetails();
  }

  FetchCreditCardDetails(){
    this.service.fetchCreditCardDetails().subscribe(
      (data: any[]) => {
        this.customers = data;
      },
      (error) => {
        console.error('Error fetching customer details: ', error);
      }
    );

  }

}
