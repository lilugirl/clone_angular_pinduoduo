import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';


export interface TopMenu{
  title:string;
   url?:string;
 }
 

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent {

  selectedIndex=-1;
  title = 'pinduoduo';
  @Input() backgroundColor='#fff';
  @Input() titleColor='blue';
  @Input() titleActiveColor='brown';
  @Input() indicatorColor='brown';
  @Input() tabs:TopMenu[]=[];
  @Output() tabSelected =new EventEmitter();

 
 handleSelection(index:number){
   this.selectedIndex=index;
   this.tabSelected.emit(this.tabs[this.selectedIndex]);

 }
 constructor(){
   console.log('组件构造调用');
 }

  // ngOnInit(): void {
  //   console.log('组件初始化');
  // }

  // ngOnChanges(changes:SimpleChanges):void{
  //    console.log('组件输入属性改变',changes);
  // }

  // ngDoCheck():void{
  //   console.log('组件藏值检测')
  // }

  // ngAfterContentInit():void{
  //   console.log('组件内容（类似 children或者slot）初始化');
  // }

  // ngAfterContentChecked():void{
  //   console.log('组件内容（类似 children或者slot）藏值检测');
  // }

  // ngAfterViewInit():void{
  //   console.log('组件视图初始化（组件和子组件都初始化）');
  // }

  // ngAfterViewChecked():void{
  //   console.log('组件视图的藏检测');
  // }

  // // 需要在负组件中移除时，触发
  // ngOnDestroy():void{
  //   console.log('组件销毁');
  // }

}
