import { Component } from '@angular/core';
import {TelegramService} from './service/telegram.service';

@Component({
  selector: 'app-root',
  template: `
    <p>輸入你的company 去組成request</p>  
    
    <!--Two way data binding-->
    <input [(ngModel)]="company">

    {{  company }}
       
    <!--ng2, ng4沒有$scope, 直接在dom裡面可以內崁method--> 
    <button (click)="queryPayrollTrnsList()">發送電文</button>
  
  `,
  styleUrls: ['./app.component.css'],
  //要用service要在providers陣列, 做依賴載入
  providers: [TelegramService]
})


export class AppComponent{
  // title = 'app works!';
  constructor(private _telegramService: TelegramService){}


  company: String;

  testData: Object;
  queryPayrollTrnsList(){

    //設定serviceId
    let serviceId = "query.QueryPayrollTrnsLis";

    //設定reqObj
    let reqData = {
      "reqHeader" : {
        "ediId": this.company
      },
      "trnsDateStart": "trnsDateStart",
      "trnsDateEnd" : "trnsDateEnd",
      "page" : "1"
    };

    //回傳為 Observable 物件, 所以這裡要用subscribe 去訂閱。
    this.testData =  this._telegramService.sendTelegram(serviceId, reqData).subscribe(
      (success) => {
        //這邊是Observable回傳的iterator
        console.log(success);
        console.log("在這裡做call back 要做的事");
      },
      (error) => {
        //這邊是Observable回傳的error
        console.log(error)
      },
      () => {
        //當Observable 的iterator結束後, 會到這
        console.log("complete");
      }
    )
  }




}
