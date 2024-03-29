import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  ngOnInit(): void {
    this.roomList = [
      {
        roomType: 'Ekonomi',
        amenities: 'Sample',
        price: 1000,
        photos:
          'https://images.unsplash.com/photo-1685572699541-00ccdc31b0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=363&q=80',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
      },
      {
        roomType: 'Ekonomi',
        amenities: 'Sample',
        price: 1000,
        photos:
          'https://images.unsplash.com/photo-1685572699541-00ccdc31b0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=363&q=80',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
      },
      {
        roomType: 'Ekonomi',
        amenities: 'Sample',
        price: 1000,
        photos:
          'https://images.unsplash.com/photo-1685572699541-00ccdc31b0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=363&q=80',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
      },
      {
        roomType: 'Ekonomi',
        amenities: 'Sample',
        price: 1000,
        photos:
          'https://images.unsplash.com/photo-1685572699541-00ccdc31b0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=363&q=80',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
}
