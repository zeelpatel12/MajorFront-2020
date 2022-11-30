import { Component, OnInit } from '@angular/core';
import { faPlus} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
 plus = faPlus;
 public amount : number;

  constructor() { }

  ngOnInit(): void {
  }

}
