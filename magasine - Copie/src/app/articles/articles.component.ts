import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  tab_art! : Article[];
  zeroStyle = {'color':'red'};

  constructor(public authServ : AuthService,private serviceArticle:ArticleService){
    this.tab_art = serviceArticle.listeArticles();
    console.log(this.tab_art);
  }

  suppArticle(art: Article){
    let conf = confirm("Etes-vous sûr de vouloir supprimer cet article ?");
    if (conf) {
    this.serviceArticle.supprimerArticle(art);
    console.log("Suppression avec succes :"+art.libelle);
    }
    }
      ngOnInit(): void {
    }


    
}
