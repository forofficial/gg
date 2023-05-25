npm install -g @angular/cli - to install angular

ng new par - to create a new app

ng generate component name - to generate component

ng serve - to build






app.component.html

<h1>{{title}}</h1>

<input type="text" #name placeholder="Name" name = "Name"> <br>

<input type="text" #address placeholder="Address" name = "Address"> <br>

<input type="text" #contact placeholder="Contact" name = "Contact"> <br>

<input type="text" #email placeholder="Email" name = "Email"> <br>

<input type="password" #Password placeholder="Password" name = "Password"> <br>


<button (click)="getValue(name.value, address.value, contact.value, email.value)" > Submit </button>


<h1> Verify Data</h1> <br>

<p> Name : {{displayname}}</p>

<p> Address : {{displayaddress}}</p>

<p> Contact : {{displaycontact}}</p>

<p> Email : {{displayemail}}</p>










app.compnent.css

input{
    width:400px;
    height: 30px;
    margin: 5px;
    padding: 3px;
}



app.component.ts


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Users cred';

  displayname = '';
  displayaddress = '';
  displaycontact = '';
  displayemail = '';

  getValue(name:string, address:string, contact:string, email:string){

  this.displayname=name;
  this.displayaddress = address;
  this.displaycontact = contact;
  this.displayemail = email;

  }

}

