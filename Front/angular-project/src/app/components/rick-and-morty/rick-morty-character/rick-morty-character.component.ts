import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyService } from '../../../services/rick-morty.service';

@Component({
  selector: 'rm-character',
  templateUrl: './rick-morty-character.component.html',
  styleUrl: './rick-morty-character.component.css'
})
export class RickMortyCharacterComponent implements OnInit {
  character!: any;
  charId!: number;

  constructor(private aRoute: ActivatedRoute, private rmService: RickMortyService) {}

  ngOnInit(): void {
      this.charId = parseInt(this.aRoute.snapshot.params["id"]);
      this.rmService.getCharacter(this.charId).subscribe((data) => {
        console.log(data);
        this.character = data;
      })
  }




}
