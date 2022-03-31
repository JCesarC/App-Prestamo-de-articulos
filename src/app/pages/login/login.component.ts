import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false;

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) {
    this.isUserLogin();
  }

  ngOnInit(): void {}

  isUserLogin() {
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }
  tryLogin(form: NgForm) {
    //console.log('Your form data : ', form.value);
    this._api
      .postTypeRequest('/usuario/login', form.value)
      .subscribe((res: any) => {
        if (res.status) {
          this._auth.setDataInLocalStorage(
            'userData',
            JSON.stringify(res.data)
          );
          this._auth.setDataInLocalStorage('token', res.token);
          this._router.navigate(['']);
        }
      });
  }
  goHome() {
    this._router.navigate(['']);
  }
}
