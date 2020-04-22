import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( private appComponent: AppComponent) { }
  list=[];
  tomy=""
  ngOnInit() {
    this.list=this.appComponent.getData();
    for(var i=0;i<this.list.length;i++)
    {
     if(this.list[i].values()=="Infor")
     {
       this.tomy="Oke";
     }
    }
  }

}