import { Component, OnInit } from '@angular/core';
import { Channel, ImageSilder, TopMenu } from 'src/app/shared/components';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
 
  channels:Channel[]=[
   {
     id:1,
     title:'限时秒杀',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/icon-design-guide.png',
     link:'hot'
   },
   {
     id:2,
     title:'断货清仓',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png',
     link:''
   },
   {
     id:3,
     title:'多多果园',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/rocket-book.png',
     link:''
   },
   {
     id:4,
     title:'秒杀',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/planet1.png',
     link:''
   },
   {
     id:5,
     title:'限时秒杀',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/icon-design-guide.png',
     link:'hot'
   },
   {
     id:6,
     title:'断货清仓',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png',
     link:''
   },
   {
     id:7,
     title:'多多果园',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/rocket-book.png',
     link:''
   },
   {
     id:8,
     title:'秒杀',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/planet1.png',
     link:''
   },
   {
     id:9,
     title:'限时秒杀',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/icon-design-guide.png',
     link:'hot'
   },
   {
     id:10,
     title:'断货清仓',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png',
     link:''
   },
   {
     id:11,
     title:'多多果园',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/rocket-book.png',
     link:''
   },
   {
     id:12,
     title:'秒杀',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/planet1.png',
     link:''
   },
   {
     id:13,
     title:'限时秒杀',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/icon-design-guide.png',
     link:'hot'
   },
   {
     id:14,
     title:'断货清仓',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png',
     link:''
   },
   {
     id:15,
     title:'多多果园',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/rocket-book.png',
     link:''
   },
   {
     id:16,
     title:'秒杀',
     icon:'https://iconutopia.com/wp-content/uploads/2016/06/planet1.png',
     link:''
   }
 ];
 
  
 

}
