import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() postName: string;
  @Input() postContent: string;
  loveValue = 0 ;
  lastUpdate = new Date();
  plusLoveIt() {
    this.loveValue++;
  }
  minusLoveIt() {
    this.loveValue--;
  }
  constructor() { }

  ngOnInit() {
  }

}
