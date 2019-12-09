import { Component } from '@angular/core';

import {DataService} from './data.service';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  users = ['Ryan', 'Joe', 'Cameroon', 'Felix', 'Andrew'];
  activated = false;
  name = 'Cristhian';
  age: number;
  address: {
    street: string,
    city: string
  };
  hobbies: string[];

  constructor() {
    this.age = 28;
    this.address = {
      street: 'street 1',
      city: 'London'
    };
    this.hobbies = ['read', 'play to guitar'];
  }
  */

  /*
 users: string[] = ['Ryan', 'Joe', 'Cameroon', 'Felix', 'Andrew'];
 name = 'Cristhian';
 age = 29;

 sayHello(user: string) {
  alert(`Hello ${user}`);
 }

 deleteUser(user: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (user === this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }

  sendUser(newUser) {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
  */
  posts: Post;

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }

 }
