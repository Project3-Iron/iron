import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/Session.service';

@Component({
  selector: 'app-HomeComponent',
  templateUrl: './HomeComponent.component.html',
  styleUrls: ['./HomeComponent.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public sessionService: SessionService, public router: Router) { }

  ngOnInit() {
  }
}
