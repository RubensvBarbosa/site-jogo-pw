import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isShowImg?: boolean;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    window.screen.width < 1560 ? this.isShowImg = false : this.isShowImg = true;
  }


  onDownload(){
    console.log('test')
    window.open("https://www.google.com", "_blank");
  }

}
