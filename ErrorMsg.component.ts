import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ErrorMsg',
  templateUrl: './ErrorMsg.component.html',
  styleUrls: ['./ErrorMsg.component.css']
})
export class ErrorMsgComponent implements OnInit {
  SuccessMessage:string|null=null;
  routeto:string|null=null;
  Msg:string|null=null;


  constructor(private router: Router) { }

  ngOnInit() {
    this.SuccessMessage=history.state.message;
    this.routeto=history.state.routeto;
    this.Msg=history.state.Msg;
  }

  navigateToSuccess()
  {
    this.router.navigate([(this.routeto)]);

  }

}
