import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Input() searchTypes: string[] = [];

  @Input() searchType: string = '';

  searchValue: string = '';
  @Output() searchValueChange = new EventEmitter<string>();
  @Output() optionButtonValueChange = new EventEmitter<string>();


  @Input() categoriesFilter: string[] = [];
  @Input() selectedCategory: string = '';
  @Output() categorySelectValueChange = new EventEmitter<string>();

  @Input() alcoholicFilter: string[] = [];
  @Input() selectedAlcoholicFilter: string = '';
  @Output() alcoholicSelectValueChange = new EventEmitter<string>();

  favoriteChecked: boolean = false;
  @Output() isFavoriteValueChange = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  onSearchTypeChange(value: string){
    this.optionButtonValueChange.emit(value);
  }

  seeFavourites(favoriteChecked: boolean){
    this.isFavoriteValueChange.emit(favoriteChecked);
  }

  alcoholicFilterChange(alcoholicFilter: string){
    this.alcoholicSelectValueChange.emit(alcoholicFilter);
  }

  categoryFilterChange(categoryFilter: string){
    this.categorySelectValueChange.emit(categoryFilter);
  }

  onSearchChange(){
    this.searchValueChange.emit(this.searchValue);
  }

}
