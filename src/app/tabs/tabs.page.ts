import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor( private route : Router) { }

  ngOnInit() {
  }
 check(){
  this.route.navigateByUrl('/tabs/playlist',{
   replaceUrl : true
   })
 }
}
