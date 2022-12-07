import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {
  public role: string;
  constructor(private usersServive:UsersService, private router :Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login')
      return
  }

  this.usersServive.getUserByToken().subscribe((user : User) => {
      this.role = user.role;
 
  }, (error : ErrorEvent) => {
      console.log(error)
  })
  }

}
