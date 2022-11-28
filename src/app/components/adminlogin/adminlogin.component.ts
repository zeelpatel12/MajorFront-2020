
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/Token';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public username : string
  public password : string
  public error : string

  constructor(private usersService : UsersService, private router : Router) { }

  ngOnInit(): void {
      if (localStorage.getItem('token')) {
          this.router.navigateByUrl('/account')
      }
  }

  logIn () {
      this.error = ''

      this.usersService.login(
          this.username, this.password).subscribe((token : Token) => {
              localStorage.setItem('token', token.token);
              this.router.navigateByUrl('/admindashboard').then(() => window.location.reload())
          }, (error : ErrorEvent) => {
              console.log(error);
              this.error = "Invalid login credentials"
          })
      
  }

}
