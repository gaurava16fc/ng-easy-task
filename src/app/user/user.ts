import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {
  @Input({required:true}) id!:string;  
  @Input({required:true}) name!:string;
  @Input({required:true}) avatar!:string;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/images/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }

}

