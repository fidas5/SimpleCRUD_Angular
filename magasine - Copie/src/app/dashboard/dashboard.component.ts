import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nbArt = 0;
  nbCateg = 0;
  totalStock = 0;
  nbUsers = 0;
  constructor(private artServ : ArticleService ,private authServ:AuthService) {
  this.nbArt = this.artServ.calculNbArticles();
  this.nbCateg = this.artServ.calculNbCategories();
  this.totalStock = this.artServ.calculTotalStock();
  this.nbUsers = this.authServ.calculNbUsers();
  }
}
