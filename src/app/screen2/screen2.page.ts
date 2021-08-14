import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.page.html',
  styleUrls: ['./screen2.page.scss'],
})
export class Screen2Page implements OnInit {
  Excited = false;
  Angry = false;
  Sad = false;
  Happy = false;
  space = true;
  diveIn = false;
  atForm = 0;
  constructor( private router:Router) { }

  ngOnInit() {
  }
// playTrack(){
//   return this.trackservice.getTrackList().subscribe((res)=>{
//     this.fileSource = res;
//     this.fileSource = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.fileSource));
//     console.log(this.fileSource)
//   })
// }

excited(){
  this.Excited = true;
  this.Sad = false;
  this.Angry = false;
  this.Happy = false;
  this.diveIn = true;
  this.space = false;
  this.atForm = 1;
}


sad(){
  this.Sad = true;
  this.Excited = false;
  this.Angry = false;
  this.Happy = false;
  this.diveIn = true;
  this.space = false; 
  this.atForm = 1;
}

happy(){
  this.Sad = false;
  this.Excited = false;
  this.Angry = false;
  this.Happy = true;
  this.diveIn = true;
  this.space = false;
  this.atForm = 1;
}

angry(){
  this.Sad = false;
  this.Excited = false;
  this.Angry = true;
  this.Happy = false;
  this.diveIn = true;
  this.space = false;
  this.atForm = 1;
}

back(){
  if(this.atForm == 0 ){
    this.router.navigateByUrl('/home')
    }
  if(this.atForm == 1 ){
    this.Excited = false;
    this.Angry = false;
    this.Sad = false;
    this.Happy = false;
    this.space = true;
    this.diveIn = false;
    this.atForm = 0;
  }
}
dive(){
  this.router.navigateByUrl('/tabs')
}
}
