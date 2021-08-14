import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferService } from '../shared/transfer.service'
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
  Id : any;
  name: any;


  constructor(private transfer : TransferService,private router: Router,public route:ActivatedRoute,) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.Id = params['Id'];
      this.name = params['name'];
      console.log(this.Id)
    });
  }
 x = [{'number' : '01','id' : '60aba5aa769b1b417391b34f' ,'name' : 'Rejoice', 'duration' : '2.02 min'},
      {'number' : '02','id' : '60abb036769b1b417391b35c' ,'name' : 'Journey to Peace', 'duration' : '3.01 min'},
      {'number' : '03','id' : '60abb07a769b1b417391b36e' ,'name' : 'Calm', 'duration' : '3.51 min'},
      {'number' : '05','id' : '60abb17c769b1b417391b392' ,'name' : 'Ecstasy', 'duration' : '3.08 min'},
      {'number' : '06','id' : '60abb267769b1b417391b3c9' ,'name' : 'Merry', 'duration' : '5.20 min'},
      {'number' : '07','id' : '60abb298769b1b417391b3e8' ,'name' : 'Elevate', 'duration' : '4.57 min'},
      {'number' : '08','id' : '60abb30d769b1b417391b405' ,'name' : 'Downhearted', 'duration' : '2.11 min'}
];

test(id: any,name: any){
  this.Id = id;
  this.name = name;
  this.transfer.setMessage(this.Id);
  console.log(this.Id);
  this.router.navigate(['/tabs/playing', {'Id' : `${this.Id}`, 'name' : `${this.name}`} ]);
}
back(){
  this.router.navigateByUrl('/screen2')
}


}
