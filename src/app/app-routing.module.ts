import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailComponent } from './cocktails/cocktails.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'detail/:cocktailId', component: CocktailDetailComponent },
  { path: 'cocktail', component: CocktailComponent },
  { path: '', redirectTo: '/cocktail', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
