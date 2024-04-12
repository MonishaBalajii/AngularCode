import { Component, OnInit } from '@angular/core';
import { Customer } from 'Customer';
import { CustomerServiceService } from 'CustomerService.service';

@Component({
  selector: 'app-FetchCityDetails',
  templateUrl: './FetchCityDetails.component.html',
  styleUrls: ['./FetchCityDetails.component.css']
})
export class FetchCityDetailsComponent implements OnInit {
  customers:  any []=[];
  City = 'Chennai';

  constructor(private service:CustomerServiceService) { }

  ngOnInit():void{
    this.FetchCityDetails();
  }

  FetchCityDetails(): void{
    this.service.fetchCityDetails(this.City).subscribe(
      (data: any[]) => {
        this.customers = data;
        console.log('Customer:', this.customers);
      },
      (error) => {
        console.error('Error fetching customer details: ', error);
  });

}
}
