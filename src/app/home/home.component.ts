import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MembersService } from '../members.service';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('paragraphRef') paragraphElement: ElementRef;
  @ViewChild(PriceComponent) priceCompRef;
  users;
  constructor(private userService: MembersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((userData) => {
      this.users = userData;
    });
  }

  onComplete() {
    this.paragraphElement.nativeElement.setAttribute('style', 'color: green');
  }

  onAddCoupne() {
    this.priceCompRef.itemPrice = 40.00;
  }
}
