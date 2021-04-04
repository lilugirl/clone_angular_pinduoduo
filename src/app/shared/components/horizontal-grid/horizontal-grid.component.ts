import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Emoji } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent implements OnInit {
  private _username='';
  @Output() usernameChange=new EventEmitter();
  @Emoji() result ='Hello';

  constructor() { }
  
  @Input()
  public get username():string{
    return this._username;
  }

  public set username(value:string){
    this._username=value;
    this.usernameChange.emit(value);
  }

  ngOnInit() {
  }

  handleInput(ev:any){
    this.username=ev.target.value;
  }

 

  
}
