import { Component, OnInit } from '@angular/core';
import { SearchengineService } from './services/searchengine.service';
import { Users } from './interfaces/searchengine.interfaces';

@Component({
  selector: 'app-searchengine',
  templateUrl: './searchengine.component.html',
  styleUrls: ['./searchengine.component.css']
})
export class SearchengineComponent {

  public users: Users[] = [];
  public page: number = 0;
  public search: string = '';

  constructor(private searchEngineService: SearchengineService) { }

  ngOnInit(): void {
    this.searchEngineService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if (this.page > 0)
      this.page -= 5;
  }

  onSearchUser(search: string) {
    this.page = 0;
    this.search = search;
  }


}
