import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any = {};

  ngOnInit() {
    const user = localStorage.getItem('user');

    if (user) {
      this.user = JSON.parse(user);
    } else {
      alert('User not found!');
    }
  }
}
