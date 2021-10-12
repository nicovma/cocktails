import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Cocktail } from '../intefaces/Cocktail';
import { CocktailService } from '../services/cocktail/cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {
  cocktail: Cocktail | undefined;
  constructor(private activatedRoute: ActivatedRoute, private cocktailService: CocktailService, private location: Location) { }

  ngOnInit(): void {
    let cocktailId = this.activatedRoute.snapshot.params.cocktailId;
    this.cocktailService.getCocktailById(cocktailId)
      .subscribe( cocktail => {
        this.cocktail = cocktail.drinks[0];
      });
  }

  goBack(): void {
    this.location.back();
  }
}
