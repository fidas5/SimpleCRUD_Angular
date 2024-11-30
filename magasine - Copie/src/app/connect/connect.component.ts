import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/compte.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit{
  user = new Compte();
  erreur = false;
  constructor(private authServ : AuthService, private router: Router) { }
  connected(){
    let permission: boolean = this.authServ.connect(this.user);
    console.log("Tentative de connexion :" + this.user.email);
    if (permission)
    this.router.navigate(['/dashboard']);
    else
    this.erreur=true;
    }
    reset() {
      this.erreur=false;
      }
      ngOnInit(): void {
      }
}
