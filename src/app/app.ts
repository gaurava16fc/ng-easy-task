import { Component, signal  } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../components/header/header';
import {User} from '../components/user/user';
import {DUMMY_USERS } from '../seed/dummy-users'
import { Tasks } from '../components/tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-easy-task');
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    // console.log("inside selectUser getter..." + this.selectedUserId);
    return this.users.find((usr) => usr.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    // console.log("Selected User with id: " + this.selectedUserId);
  }
}
