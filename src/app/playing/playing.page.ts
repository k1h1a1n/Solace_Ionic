import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferService } from '../shared/transfer.service'

@Component({
  selector: 'app-playing',
  templateUrl: './playing.page.html',
  styleUrls: ['./playing.page.scss'],
})
export class PlayingPage implements OnInit{
  Id: any;
  test: string;
  data: any;
  name: any;
  constructor(private transfer : TransferService,public route:ActivatedRoute,public router:Router) {

   }
 

  ngOnInit( 
  ) {
    this.route.params.subscribe(params => {
      this.data = params['Id'];
      this.name = params['name'];
      console.log(this.data)
    });
    // this.Id = this.transfer.getmessage()
    // console.log(this.Id)
    this.test =`http://ec2-13-234-23-239.ap-south-1.compute.amazonaws.com:3005/tracks/${this.data}`
    console.log(this.test)
  }

  back(){
this.router.navigate(['/tabs/playlist', {'Id' : `${this.data}`, 'name' : `${this.name}`} ] ,{replaceUrl : true}
)
  }





}
