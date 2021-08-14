import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
message: any
  constructor() { }

  setMessage(data){
    this.message = data;
    console.log(this.message);
  }
getmessage(){
  return this.message;
}


}
