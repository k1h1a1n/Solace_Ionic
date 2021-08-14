import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginPage} from '../app/login/login.page';
import { LoginPageModule } from './login/login.module';
import { HomePage } from './home/home.page';
import { HomePageModule } from './home/home.module';
import { PlayingPage } from './playing/playing.page';
import { Screen2Page } from './screen2/screen2.page';
import { Screen2PageModule } from './screen2/screen2.module';
import { PlaylistPage } from './playlist/playlist.page';
import { PlayingPageModule } from './playing/playing.module';
import { PlaylistPageModule } from './playlist/playlist.module';
import { TabsPage } from './tabs/tabs.page';
import { TabsPageModule } from './tabs/tabs.module';
import { FeedbackPage } from './feedback/feedback.page';
import { FeedbackPageModule } from './feedback/feedback.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,LoginPageModule,HomePageModule,Screen2PageModule,PlayingPageModule,PlaylistPageModule,TabsPageModule,FeedbackPageModule,
  RouterModule.forRoot([
    {
      path: 'login' , component : LoginPage
    },
    {
      path: 'home' , component : HomePage
    },
    {
      path: 'screen2', component : Screen2Page
    },
    {
      path: 'playlist' , component : PlaylistPage,
    },
    { path : 'tabs' , component : TabsPage ,
    children : [{path:'playing',component:PlayingPage},
    {path:'playlist', component:PlaylistPage},
    {path:'',component:PlaylistPage},      
  ]
  },
  {path:'tabs/speakers',component:FeedbackPage},  
    
  ])
  
  
  
  
  
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
