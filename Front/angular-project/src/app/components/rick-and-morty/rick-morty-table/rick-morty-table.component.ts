import { RickMortyService } from './../../../services/rick-morty.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rm-table',
  templateUrl: './rick-morty-table.component.html',
  styleUrl: './rick-morty-table.component.css'
})
export class RickMortyTableComponent implements OnInit {
  charList: any[] = [];
  constructor(private rmService: RickMortyService) {
    rmService.getList.subscribe((data) => {console.log(data)})
  }

  ngOnInit(): void {
    this.rmService.getList.subscribe((data:any) => {
      this.charList = data.results;
    });
  }
}
