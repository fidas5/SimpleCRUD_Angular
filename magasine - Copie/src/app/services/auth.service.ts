import { Injectable } from '@angular/core';
import { Compte } from '../model/compte.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: Compte[] = [
    {"nom":"administrateur", "email":"admin@gmail.com", "mot2pass":"admin","role":"ADMIN"},
    {"nom":"Sassi", "email":"fidaasassi@gmail.com", "mot2pass":"fida","role":"AGENT"} 
    ];
    userCourant! : string;
    isConnected : boolean = false;
    role! : string;
    constructor(private router: Router) { }

    disconnect() {
      this.isConnected= false;
      this.userCourant = undefined!;
      this.role = undefined!;
      this.router.navigate(['/']);
      localStorage.removeItem('userCourant');
      localStorage.setItem('isConnected', String(this.isConnected));
      }

      connect(user : Compte) : boolean {
        this.users.forEach((unUser) => {
        if(user.email== unUser.email && user.mot2pass==unUser.mot2pass) {
        this.isConnected = true;
        this.userCourant = unUser.nom;
        this.role = unUser.role;
        console.log("Connexion :", unUser.nom, " - role :",unUser.role);
        localStorage.setItem('userCourant', this.userCourant);
        localStorage.setItem('isConnected', String(this.isConnected));
        }
        });
        return this.isConnected;
        }
        calculNbUsers () : number {
        return this.users.length;
        }
        testerAdmin():boolean{
        if (!this.role)
        return false;
        return (this.role == 'ADMIN');
        }
}
