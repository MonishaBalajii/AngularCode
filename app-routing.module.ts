import { LoginpageComponent } from './../../../MobileApp/src/app/loginpage/loginpage.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Create/Create.component';
import { FetchAllCustomersComponent } from './FetchAllCustomers/FetchAllCustomers.component';
import { FetchByIdComponent } from './FetchById/FetchById.component';
import { FetchCityDetailsComponent } from './FetchCityDetails/FetchCityDetails.component';
import { FetchCrecitCardDetailsComponent } from './FetchCrecitCardDetails/FetchCrecitCardDetails.component';
import { FetchProviderDetailsComponent } from './FetchProviderDetails/FetchProviderDetails.component';
import { SuccessMsgComponent } from './SuccessMsg/SuccessMsg.component';
import { ErrorMsgComponent } from './ErrorMsg/ErrorMsg.component';
import { HomePageComponent } from 'src/assets/HomePage/HomePage.component';
import { CustomerFetchProviderComponent } from './CustomerFetchProvider/CustomerFetchProvider.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { DeleteComponent } from './Delete/Delete.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Create',component: CreateComponent},
  {path:'FetchAllCustomer',component: FetchAllCustomersComponent},
  {path:'FetchById',component: FetchByIdComponent},
  {path:'FetchCityDetails',component:FetchCityDetailsComponent},
  {path:'FetchCreditCardDetails',component:FetchCrecitCardDetailsComponent},
  {path:'FetchProviderDetails',component:FetchProviderDetailsComponent},
  {path:'CustomerFetchProvider',component:CustomerFetchProviderComponent},
  {path:'SuccessMsg',component:SuccessMsgComponent},
  {path:'ErrorMsg',component:ErrorMsgComponent},
  {path:'Login',component:LoginComponent},
  {path:'Home',component:HomeComponent},
  {path:'errorMsg',component:ErrorMsgComponent},
  {path:'Success',component:SuccessMsgComponent},
  {path:'Delete',component:DeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
