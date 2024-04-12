
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Customer } from 'Customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
constructor(private http: HttpClient) { }


private CreateUrl = 'https://localhost:7298/CustomerAPI/Create';
private FetchAllUrl = 'https://localhost:7298/CustomerAPI/CustomerDetails';
private FetchByIdUrl=' https://localhost:7298/CustomerAPI/GetCustomerById';
private UpdateUrl='https://localhost:7298/CustomerAPI/UpdateDetails';
private FetchCityUrl='https://localhost:7298/CustomerAPI/CityDetails';
private FetchCreditCardUrl='https://localhost:7298/CustomerAPI/CustomerDetailsUsingJoins';
private FetchProviderUrl='https://localhost:7298/CustomerAPI/ProviderDetails';
private CustomerJoinProviderUrl='https://localhost:7298/CustomerAPI/GetCustomerCreditCardUsingJoin';





insertCustomer(CustomerData : Customer): Observable<Customer>
{
  console.log(CustomerData);
  return this.http.post<Customer>(this.CreateUrl,CustomerData);
}

fetchAllCustomers(): Observable<any[]>{
  return this.http.get<any[]>(this.FetchAllUrl)
}

fetchById(formdata:FormGroup):Observable<Customer>
{
    const CustomerId = formdata.value.CustomerId;
    const url = `${this.FetchByIdUrl}/${CustomerId}`;
     return this.http.get<Customer>(url);
}


updateCustomer(CustomerData: Customer): Observable<Customer> {
  console.log(CustomerData);
  return this.http.post<Customer>(this.UpdateUrl, CustomerData);
}

fetchCityDetails(City:string): Observable<any[]> {
  console.log(City);
  return this.http.get<any[]>(this.FetchCityUrl);
}

fetchCreditCardDetails(): Observable<any[]> {
  return this.http.get<any[]>(this.FetchCreditCardUrl);
}

fetchProviderDetails(): Observable<any[]> {
  return this.http.get<any[]>(this.FetchProviderUrl);
}

fetchCustomerWithProvider(formdata : FormGroup):Observable<any[]>
{
  const start=formdata.value.start;
  const end=formdata.value.end;
  const url=`${this.CustomerJoinProviderUrl}/${start}/${end}`;
  return this.http.get<any[]>(url);
}




}
