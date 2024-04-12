import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'CustomerService.service';

@Component({
  selector: 'app-FetchProviderDetails',
  templateUrl: './FetchProviderDetails.component.html',
  styleUrls: ['./FetchProviderDetails.component.css']
})
export class FetchProviderDetailsComponent implements OnInit {
  customers: any[] = [];

  constructor(private service: CustomerServiceService) { }

  ngOnInit() {
    this.fetchProviderDetails();
  }

  fetchProviderDetails() {
    this.service.fetchProviderDetails().subscribe(
      (data: any) => {
        // Check if data is an object with "$values" property
        if (data && data.$values) {
          this.customers = data.$values;
        } else {
          console.error('Invalid API response: ', data);
        }
      },
      (error) => {
        console.error('Error fetching customer details: ', error);
      }
    );
  }

}
