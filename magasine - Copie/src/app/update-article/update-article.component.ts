import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Article } from '../model/article.model'; 
import { ArticleService } from '../services/article.service'; 
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent {
  articleCourant = new Article(); 
  categories! : Categorie[];
  codecModifie! : any;
  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, private route:Router) { } 
     
    modifArticle(){ 
      this.articleCourant.categ = this.articleService.findByCodec(this.codecModifie);
    this.articleService.modifierArticle(this.articleCourant); 
    console.log("Article modifié avec succes : "+ 
    this.articleCourant.libelle+":"+this.articleCourant.prix+"DT, qté="+ 
    this.articleCourant.qte+", ajoutée le "+this.articleCourant.dateAjout); 
    this.route.navigate(['articles'])
    } 
     
    ngOnInit(): void { 
      this.categories = this.articleService.ListCateg();
    this.articleCourant = this.articleService.consulterArticle(this.activatedRoute.snapshot.params['id']); 
    console.log("Code article à modifier "+this.articleCourant.codea); 
    this.codecModifie = this.articleCourant.categ.codec;
    }

}
