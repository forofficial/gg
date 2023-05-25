import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: any = {};

  onSubmit() {
    localStorage.setItem('user', JSON.stringify(this.user));
    alert('Registration successful!');
  }
}
