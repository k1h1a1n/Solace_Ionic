import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  yesBtn = 'white';
  noBtn = 'white';
  labelColor1 = false;
  labelColor2 = false;
  No = false;
  Yes = false;
  yesBtn1 = 'white';
  noBtn1 = 'white';
  labelColor3 = false;
  labelColor4 = false;
  No1 = false;
  Yes1 = false;
  space = true;
  space1 = true;
  yesBtn2 = 'white';
  noBtn2 = 'white';
  labelColor5 = false;
  labelColor6 = false;
  No2 = false;
  Yes2 = false;
  yesBtn3 = 'white';
  noBtn3 = 'white';
  labelColor7 = false;
  labelColor8 = false;
  No3 = false;
  Yes3 = false;
  yesBtn4 = 'white';
  noBtn4 = 'white';
  labelColor9 = false;
  labelColor10 = false;
  No4 = false;
  Yes4 = false;
  space2 = true;
  space4 = true;
  form1 = true;
  form2 = false;
  form3 = false;
  form4 = false;
  atForm = 1;

  constructor(private router:Router) {}

  userInfo (x: string){
    if(x == 'yes') {
      this.Yes = true;
      this.No = false;
      this.yesBtn = 'myBtnColor';
      this.labelColor1 = true;
      this.noBtn = 'white';
      this.labelColor2 = false;
      this.Yes1 = false;
      this.No1 = false;
      this.noBtn1 = 'white';
      this.labelColor3 = false;
      this.labelColor4 = false;
      this.yesBtn1 = 'white';
      this.space = false;
    }
    if(x == 'no') {
      this.No = true;
      this.Yes = false;
      this.noBtn = 'myBtnColor';
      this.labelColor2 = true;
      this.yesBtn = 'white';
      this.labelColor1 = false;
      this.No1 = false;
      this.Yes1 = false;
      this.space = false;
    }
  }

  userInfo1 (x: string){
    if(x == 'yes') {
      this.Yes1 = true;
      this.No1 = false;
      this.yesBtn1 = 'myBtnColor';
      this.labelColor3 = true;
      this.noBtn1 = 'white';
      this.labelColor4 = false;
      this.space = false;
    }
    if(x == 'no') {
      this.No1 = true;
      this.Yes1 = false;
      this.noBtn1 = 'myBtnColor';
      this.labelColor4 = true;
      this.yesBtn1 = 'white';
      this.labelColor3 = false;
      this.space = false;
    }
  }

  userInfo2 (x: string){
    if(x == 'yes') {
      this.Yes2 = true;
      this.No2 = false;
      this.yesBtn2 = 'myBtnColor';
      this.labelColor5 = true;
      this.noBtn2 = 'white';
      this.labelColor6 = false;
      this.space1 = false;
    }
    if(x == 'no') {
      this.No2 = true;
      this.Yes2 = false;
      this.noBtn2 = 'myBtnColor';
      this.labelColor6 = true;
      this.yesBtn2 = 'white';
      this.labelColor5 = false;
      this.space1 = false;
    }
  }

  userInfo3 (x: string){
    if(x == 'yes') {
      this.Yes3 = true;
      this.No3 = false;
      this.yesBtn3 = 'myBtnColor';
      this.labelColor7 = true;
      this.noBtn3 = 'white';
      this.labelColor8 = false;
      this.space2 = false;
    }
    if(x == 'no') {
      this.No3 = true;
      this.Yes3 = false;
      this.noBtn3 = 'myBtnColor';
      this.labelColor7 = false;
      this.yesBtn3 = 'white';
      this.labelColor8 = true;
      this.space2 = false;
    }
  }

  userInfo4 (x: string){
    if(x == 'yes') {
      this.Yes4 = true;
      this.No4 = false;
      this.yesBtn4 = 'myBtnColor';
      this.labelColor9 = true;
      this.noBtn4 = 'white';
      this.labelColor10 = false;
      this.space4 = false;
    }
    if(x == 'no') {
      this.No4 = true;
      this.Yes4 = false;
      this.noBtn4 = 'myBtnColor';
      this.labelColor9 = false;
      this.yesBtn4 = 'white';
      this.labelColor10 = true;
      this.space4 = false;
    }
  }

  back(){
    if(this.atForm == 0 ){
    this.yesBtn = 'white';
    this.noBtn = 'white';
    this.labelColor1 = false;
    this.labelColor2 = false;
    this.No = false;
    this.Yes = false;
    this.space = true;
    this.yesBtn1 = 'white';
    this.noBtn1 = 'white';
    this.labelColor3 = false;
    this.labelColor4 = false;
    this.No1 = false;
    this.Yes1 = false;
    this.space1 = true;
    this.yesBtn2 = 'white';
    this.noBtn2 = 'white';
    this.labelColor5 = false;
    this.labelColor6 = false;
    this.No2 = false;
    this.Yes2 = false;
    this.yesBtn3 = 'white';
    this.noBtn3 = 'white';
    this.labelColor7 = false;
    this.labelColor8 = false;
    this.No3 = false;
    this.Yes3 = false;
    this.yesBtn4 = 'white';
    this.noBtn4 = 'white';
    this.labelColor9 = false;
    this.labelColor10 = false;
    this.No4 = false;
    this.Yes4 = false;
    this.space2 = true;
    this.space4 = true;
    this.atForm = 1;
    }
    if(this.atForm == 1 ){
    this.form1 = true;
    this.form2 = false;
    this.form3 = false;
    this.form4 = false;
    this.atForm = 0;
    }
    if(this.atForm == 2 ){
      this.form1 = false;
      this.form2 = true;
      this.form3 = false;
      this.form4 = false;
      this.atForm = 1;
    }
    if(this.atForm == 3 ){
      this.form1 = false;
      this.form2 = false;
      this.form3 = true;
      this.form4 = false;
      this.atForm = 2;
      }
  }

  continue1(){
    this.form1 = false;
    this.form2 = true;
    this.atForm = 1;
  }

  continue2(){
    this.form1 = false;
    this.form2 = true;
    this.atForm = 1;
  }

  continue3(){
    this.form1 = false;
    this.form2 = true;
    this.atForm = 1;
  }

  continue4(){
    this.form1 = false;
    this.form2 = false;
    this.form3 = true;
    this.atForm = 2;
  }

  continue5(){
    this.form1 = false;
    this.form2 = false;
    this.form3 = true;
    this.atForm = 2;
  }

  continue6(){
    this.form1 = false;
    this.form2 = false;
    this.form3 = false;
    this.form4 = true;
    this.atForm = 3;
  }

  continue7(){
    this.form1 = false;
    this.form2 = false;
    this.form3 = false;
    this.form4 = true;
    this.atForm = 3;
  }

  continue8(){
    this.router.navigateByUrl('/screen2')
  }
  
  continue9(){
    this.router.navigateByUrl('/screen2')
  }
}
