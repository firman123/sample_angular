import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent {
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);

    //add comment
    //cek cel
    //ini adalha sample test yang aku buat
    //buat sample comment
    //add comment lagi
    //add comment sample1
  }
}
