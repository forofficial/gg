import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: any = {};

  onSubmit() {
    const user = localStorage.getItem('user');

    if (user) {
      const parsedUser = JSON.parse(user);

      if (parsedUser.username === this.credentials.username && parsedUser.password === this.credentials.password) {
        alert('Login successful!');
      } else {
        alert('Invalid username or password!');
      }
    } else {
      alert('User not found!');
    }
  }
}
