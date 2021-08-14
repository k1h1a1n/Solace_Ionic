import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  Btn1 = 'white';
  labelColor1 = false;
  Btn2 = 'white';
  labelColor2 = false;
  Btn3 = 'white';
  labelColor3 = false;
  Btn4 = 'white';
  labelColor4 = false;
  continue = false;
  form1 = true;
  form2 = false;
  Btn5 = 'white';
  Btn6 = 'white';
  labelColor5 = false;
  labelColor6 = false;
  atform = '1';

  constructor(public router : Router) { }

  ngOnInit() {
  }
back (){
  if (this.atform == '1'){
    this.router.navigateByUrl('tabs/playlist')
  }
  if (this.atform == '2'){
    this.form1 = true;
    this.form2 = false;
    this.atform = '1';
    this.Btn5 = 'white';
    this.Btn6 = 'white';
    this.labelColor5 = false;
    this.labelColor6 = false;
  }
}
userInfo1(){
  this.Btn1 = 'myBtnColor';
  this.labelColor1 = true;
  this.Btn2 = 'white';
  this.labelColor2 = false;
  this.Btn3 = 'white';
  this.labelColor3 = false;
  this.Btn4 = 'white';
  this.labelColor4 = false;
  this.continue = true;
}

userInfo2(){
  this.Btn1 = 'white';
  this.labelColor1 = false;
  this.Btn2 = 'myBtnColor';
  this.labelColor2 = true;
  this.Btn3 = 'white';
  this.labelColor3 = false;
  this.Btn4 = 'white';
  this.labelColor4 = false;
  this.continue = true;
}

userInfo3(){
  this.Btn1 = 'white';
  this.labelColor1 = false;
  this.Btn2 = 'white';
  this.labelColor2 = false;
  this.Btn3 = 'myBtnColor';
  this.labelColor3 = true;
  this.Btn4 = 'white';
  this.labelColor4 = false;
  this.continue = true;
}

userInfo4(){
  this.Btn1 = 'white';
  this.labelColor1 = false;
  this.Btn2 = 'white';
  this.labelColor2 = false;
  this.Btn3 = 'white';
  this.labelColor3 = false;
  this.Btn4 = 'myBtnColor';
  this.labelColor4 = true;
  this.continue = true;
}

Continue(){
  this.form2 = true;
  this.form1 = false;
  this.atform = '2';
}


userInfo5(){
  this.Btn5 = 'myBtnColor';
  this.labelColor5 = true;
  this.Btn6 = 'white';
  this.labelColor6 = false;
  setTimeout(()=>{ this.router.navigateByUrl('/tabs/playlist') }, 150)
}

userInfo6(){
  this.Btn5 = 'white';
  this.labelColor5 = false;
  this.Btn6 = 'myBtnColor';
  this.labelColor6 = true;
  setTimeout(()=>{ navigator['app'].exitApp();}, 150)
}

continue1(){
  this.router.navigateByUrl('/tabs/playlist')
}

}
