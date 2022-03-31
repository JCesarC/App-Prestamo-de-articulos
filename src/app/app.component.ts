import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterLinkActive } from '@angular/router';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Laboratorio';
  isLogin: boolean;
  errorMessage: any;

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  subscription: Subscription = new Subscription();

  constructor(
    private observer: BreakpointObserver,
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) {}
  ngOnInit() {
    this.subscription = this._auth.currentSesion.subscribe(
      (sesion) => (this.isLogin = sesion)
    );
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }


  async logout() {
    this._auth.clearStorage();
    this._router.navigate(['/login']);
  }
}
