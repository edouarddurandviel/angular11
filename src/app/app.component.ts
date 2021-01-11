import { Component, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private router: Router
    ){}

  log(msg: any) {
    console.log(msg);
  }

  ngOnInit(): void {
  }
}
