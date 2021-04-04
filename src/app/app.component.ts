import { Component, ViewChild } from '@angular/core';
import {ImageSilder, ImageSilderComponent, TopMenu} from './shared/components'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 @ViewChild(ImageSilderComponent) imageSlider:ImageSilderComponent;
 username='';
 topMenus:TopMenu[]=[
  {title:'男装',url:'#1'},
  {title:"儿童",url:'#2'},
  {title:'百货',url:''},
  {title:'手机',url:''},
  {title:'日用',url:''},
  {title:'美妆',url:''},
  {title:'家电',url:''},
  {title:'运动',url:''},
  {title:'百货',url:''},
  {title:'手机',url:''},
  {title:'日用',url:''},
  {title:'美妆',url:''},
  {title:'家电',url:''},
  {title:'运动',url:''},
  {title:'家电',url:''},
  {title:'运动',url:''},
  {title:'百货',url:''},
  {title:'手机',url:''},
  {title:'日用',url:''},
  {title:'美妆',url:''},
  {title:'家电',url:''},
  {title:'运动',url:''},
 ];

 scrollableTabBgColor='red';
 imageSliders:ImageSilder[]=[
   {
     imgUrl:'https://demo.presscustomizr.com/wp-content/uploads/2016/12/ny_city-1348x500.jpg',
     link:'',
     caption:''
   },
   {
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1x6B6jQs119paou7zMMCVMigMrlINp6zXXIEZC7mGdEtNj8wOPbBaK_d8VcXRbYEUBS0&usqp=CAU',
    link:'',
    caption:''
  },
  {
    imgUrl:'https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-computer-900x288.jpg',
    link:'',
    caption:''
  },
  {
    imgUrl:'https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg',
    link:'',
    caption:''
  },{
    imgUrl:'https://www.elegantthemes.com/blog/wp-content/uploads/2020/10/shutterstock_1362337379.png',
    link:'',
    caption:''
  }
 ];

 
 ngAfterViewInit(){
   console.log('app after view init',this.imageSlider);
 }

 handleTabSelected(topMenu:TopMenu){
   const colors=['red','blue','black'];
   const idx=Math.floor(Math.random()*3);
   this.scrollableTabBgColor=colors[idx];
   console.log('handleTabSelected',topMenu);
 }


}
