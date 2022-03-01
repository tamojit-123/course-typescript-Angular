import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authservice.login();
    this.router.navigate([""]);

  }
}
