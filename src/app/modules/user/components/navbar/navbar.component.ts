import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/constants/routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routes = routes;
  navbarCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
