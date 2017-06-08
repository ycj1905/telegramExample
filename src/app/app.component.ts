import { Component } from '@angular/core';
import {TelegramService} from './service/telegram.service';
// import {X2JS} from "x2json";

@Component({
  selector: 'app-root',
  template: `
    <!--<p>輸入你的company 去組成request</p>  -->
    <!---->
    <!--&lt;!&ndash;Two way data binding&ndash;&gt;-->
    <!--<input [(ngModel)]="company">-->

    <!--{{  company }}-->
       
    
    <button (click)="queryPayrollTrnsList()">發送電文</button>
    
    <button (click)="getSimulation()">發送模擬電文1(in-memory)</button>
    <button (click)="getSimulation2()">發送模擬電文2(in-memory)</button>
    <p>
    {{ testData }}
    
    </p>
    <!--<button (click)="getSimulation3()">發送模擬電文simulation(local)</button>-->
    
    <!--<button (click)="testX2Json()">x2Json</button>-->
  
  `,
  styleUrls: ['./app.component.css'],
  //要用service要在providers陣列, 做依賴載入
  providers: []
})


export class AppComponent{
  // title = 'app works!';
  constructor(private _telegramService: TelegramService){}


  testData: any;
  queryPayrollTrnsList(){

    //設定serviceId
    let serviceId = "query.QueryPayrollTrnsLis";

    //設定reqObj
    let reqData = {
      "reqHeader" : {
        "ediId": "company"
      },
      "trnsDateStart": "trnsDateStart",
      "trnsDateEnd" : "trnsDateEnd",
      "page" : "1"
    };

    //回傳為 Observable 物件, 所以這裡要用subscribe 去訂閱。
    this.testData =  this._telegramService.sendTelegram(serviceId, reqData).subscribe(
      (success) => {
        //這邊是Observable回傳的iterator
        this.testData = JSON.stringify(success);
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

  /** in-memory-data test **/
  getSimulation(){
    let serviceId = "heroes";
    let reqData = "";

    this._telegramService.sendSimulation1(serviceId, reqData)
      .then((hero) => this.testData = hero)
      .then((response) => {console.error(response); this.testData = JSON.stringify(response)});
  }

  getSimulation2(){
    let serviceId = "noHeroes";
    let reqData = "";

    this._telegramService.sendSimulation1(serviceId, reqData)
      .then((hero) => this.testData = hero)
      .then((response) => {console.error(response); this.testData = JSON.stringify(response)});
  }


  // getSimulation3(){
  //   let serviceId = "f4000103_res.json";
  //   let reqData = "";
  //
  //   this._telegramService.sendSimulation2(serviceId, reqData)
  //     .then((hero) => this.testData = hero)
  //     .then((response) => console.error(response));
  // }


  // testX2Json(){
  //
  //   //https://github.com/abdmob/x2js   For more API detail
  //
  //   let x2js = new X2JS();
  //   let xmlText = "<MyRoot><test>Success</test><test2><item>val1</item><item>val2</item></test2></MyRoot>";
  //   let jsonObj = x2js.xml_str2json( xmlText );
  //
  //   console.error(xmlText);
  //   console.error(JSON.stringify(jsonObj));
  //
  // }

}
