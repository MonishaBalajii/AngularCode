import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-SuccessMsg',
  templateUrl: './SuccessMsg.component.html',
  styleUrls: ['./SuccessMsg.component.css']
})
export class SuccessMsgComponent implements OnInit {
  SuccessMessage:string|null=null;

  constructor(private router: Router) { }

  ngOnInit() {
    this.SuccessMessage=history.state.message;
  }

  navigateToSuccess()
  {
     this.router.navigate([('/main/FetchAllCustomer')]);
  }


}
