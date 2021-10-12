import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CocktailComponent } from './cocktails/cocktails.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { CocktailService } from './services/cocktail/cocktail.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule }  from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from './item-card/item-card.component';
import { MatCardModule } from '@angular/material/card';
import { ListItemComponent } from './list-item/list-item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { OptionButtonComponent } from './option-button/option-button.component';
import { OptionSelectComponent } from './option-select/option-select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SearchFormComponent } from './search-form/search-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    CocktailComponent,
    CocktailDetailComponent,
    ItemCardComponent,
    ListItemComponent,
    MenuComponent,
    OptionButtonComponent,
    OptionSelectComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    FlexLayoutModule,
    MatCheckboxModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
