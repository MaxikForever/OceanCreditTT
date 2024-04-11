import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @Input() userName!: string | undefined;
  splitUserName: string[] | undefined;

  ngOnInit() {
    this.splitUserName = this.userName?.split(' ');
  }
}