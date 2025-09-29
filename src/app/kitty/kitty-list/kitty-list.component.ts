import { Component, effect, inject, input, OnInit } from '@angular/core';
import { KittyCardComponent } from '../kitty-card/kitty-card.component';
import { Kitty } from '../models/model';
import { KittyApiService } from '../kitty-api.service';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-kitty-list',
  imports: [
    KittyCardComponent,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SearchBarComponent,
    AsyncPipe,
  ],
  templateUrl: './kitty-list.component.html',
  styleUrl: './kitty-list.component.scss',
})
export class KittyListComponent implements OnInit {
  kittyApiService = inject(KittyApiService);
  readonly query = input('');
  kitties!: Observable<Kitty[]>;

  constructor() {
    effect(() => {
      this.kitties = this.kittyApiService.getAll({ query: this.query() });
    });
  }

  ngOnInit() {
    // only triggerd once
    this.kitties = this.kittyApiService.getAll({ query: this.query() });
  }
}
