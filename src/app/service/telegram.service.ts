import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map'; //deal with _http.get().map()
import 'rxjs/add/operator/toPromise';
// import { Hero } from './hero';

@Injectable()
export class TelegramService {

  //ES6語法, 在這裡new Http 物件, 並命名為 _http
  constructor( private _http: Http) { }

  // For http port
  private url = 'http://192.168.1.116:8080';

  // For meomory-web-api path
  private memoUrl = 'api/';  // URL to web api
  // private simulateUrl = './';

  /** For Http **/
  sendTelegram(serviceId: String, reqData: Object){

    /**這裡做 reqData組裝 **/
    // if(!reqData){
    //   reqData = {}
    // }
    // reqData.reqHeader = {};
    /**這裡做 reqData組裝 **/
    // reqData.reqHeader.serviceId = serviceId;

    let header = new Headers();
    header.append('Content-Type', 'application/json');

    return this._http.get(this.url + serviceId, {headers: header})
      .map((response) => response.json());
  }


  /** For in-memory-data **/
  sendSimulation1(serviceId: String, reqData: Object){
    return this._http.get(this.memoUrl + serviceId)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  /** For local Json file:  Not working now**/
  // sendSimulation2(serviceId: String, reqData: Object): Promise<any> {
  //   // console.log("----------");
  //   // console.error(this.simulateUrl+serviceId);
  //   // console.log("----------");
  //   // return this._http.get(this.simulateUrl + serviceId)
  //   return this._http.get('/src/app/service/f4000103_res.json')
  //     .toPromise()
  //     .then(response => response.json())
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
