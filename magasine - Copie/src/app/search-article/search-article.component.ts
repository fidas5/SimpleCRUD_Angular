import { Component } from '@angular/core';
import { Article } from '../model/article.model';
import { Categorie } from '../model/categorie.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.css']
})
export class SearchArticleComponent {
  articles! : Article[];
  libArticle! : string;
  categRech! : number;
  categories! : Categorie[];
  critere! : string;
  dateAjout!:Date;
  constructor(private articleService: ArticleService ) {
    this.articles = articleService.listeArticles();
    }

    chercherParLib(lib : string){
      this.articles = this.articleService.listeArticles();
      this.articles= this.articles.filter(art => art.libelle.toLowerCase().includes(lib.toLowerCase()));
      }


    
      

      chercherParCateg() {
        this.articles = this.articleService.listeArticles();
        this.articles = this.articles.filter(art => art.categ.codec ==
        this.categRech);
        }
        reset(){
        this.articles = this.articleService.listeArticles();
        }
    
    
    ngOnInit(): void {
    this.categories = this.articleService.ListCateg();
    }
}
