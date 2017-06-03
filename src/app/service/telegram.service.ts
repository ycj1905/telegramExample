import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map'; //deal with _http.get().map()

@Injectable()
export class TelegramService {

  //ES6語法, 在這裡new Http 物件, 並命名為 _http
  constructor( private _http: Http) { }

  //設定URL
  url:string = 'http://192.168.1.116:8080';

  sendTelegram(serviceId: String, reqData: Object){

    /**這裡做 reqData組裝 **/
    if(!reqData){
      reqData = {}
    }
    reqData.reqHeader = {};
    /**這裡做 reqData組裝 **/
    reqData.reqHeader.serviceId = serviceId;

    let header = new Headers();
    header.append('Content-Type', 'application/json');

    return this._http.get(this.url + serviceId, {headers: header})
      .map((response) => response.json());
  }
}
