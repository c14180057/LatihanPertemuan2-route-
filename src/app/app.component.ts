import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  jurusan;
  listJurusan=[];
   constructor (private router : Router) {}
  Input(){
    this.router.navigate(['/input']);

  }
  Edit()
  {
      this.router.navigate(['/edit']);
  }
  List()
  {
      this.router.navigate(['/list']);
  }
  input(nama,desk)
 {
  this.jurusan=[nama,desk];
  this.listJurusan.push(this.jurusan); 

  alert("Success")
 }
 getData()
 {
   return this.listJurusan;
 }
 edit(nama,desk)
 {

 }
}
