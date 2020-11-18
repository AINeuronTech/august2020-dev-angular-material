import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  @ViewChild('myteam') teamElement: ElementRef;
  @Input() users;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.teamElement.nativeElement.setAttribute("style", "color: blue");
  }
}
