import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TopMenu } from 'src/app/shared/components';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  constructor(private router:Router){
    
  }

  ngOnInit():void{

  }
  topMenus:TopMenu[]=[
    {id:1,title:'热门',link:'hot'},
    {id:2,title:'男装',link:'men'},
    {id:3,title:'百货',link:'department'},
    {id:4,title:'运动',link:'spots'},
    {id:5,title:'手机',link:'mobile'},
    {id:6,title:'家纺',link:'textile'},
    {id:7,title:'食品',link:'food'},
    {id:17,title:'家具',link:'furnitures'}
   ];
  
   scrollableTabBgColor='red';
  
  
   handleTabSelected(topMenu:TopMenu){
    this.router.navigate(['home',topMenu.link])
  }

}
