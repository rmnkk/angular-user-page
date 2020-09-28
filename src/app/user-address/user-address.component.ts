import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {
  @Input() userAddress;
  constructor() { }

  ngOnInit(): void {
  }

}
