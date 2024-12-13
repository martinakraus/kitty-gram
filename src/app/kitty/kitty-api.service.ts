import { Injectable } from '@angular/core';
import { Kitty } from './models/model';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class KittyApiService {
  kitties: Kitty[] = [
    { image: 'cat1.jpeg', name: 'Mittens', race: 'Ragdoll' },
    { image: 'cat2.jpeg', name: 'Mauzi', race: 'Abyssinian' },
    { image: 'cat9.jpeg', name: 'Nala', race: 'Ragdoll' },
    { image: 'cat3.jpeg', name: 'Marsi & Meowny', race: 'Europ. Shorthair' },
    { image: 'cat4.jpeg', name: 'Susi', race: 'Siamese' },
    { image: 'cat5.jpeg', name: 'Lenny & Morle', race: 'Europ. Shorthair' },
    { image: 'cat6.jpeg', name: 'Moritz', race: 'Europ. Shorthair' },
    { image: 'cat7.jpeg', name: 'Whisky', race: 'British Shorthair' },
    { image: 'cat8.png', name: 'Raupy', race: 'Bengal' },
    { image: 'cat11.jpeg', name: 'Mimi', race: 'British Shorthair' },
    { image: 'cat10.jpeg', name: 'Lucy', race: 'Maine Coon' },
    { image: 'cat2.jpeg', name: 'Mauzi', race: 'Abyssinian' },
    { image: 'cat9.jpeg', name: 'Nala', race: 'Ragdoll' },
    { image: 'cat3.jpeg', name: 'Marsi & Meowny', race: 'Europ. Shorthair' },
    { image: 'cat4.jpeg', name: 'Susi', race: 'Siamese' },
    { image: 'cat5.jpeg', name: 'Lenny & Morle', race: 'Europ. Shorthair' },
    { image: 'cat6.jpeg', name: 'Moritz', race: 'Europ. Shorthair' },
    { image: 'cat7.jpeg', name: 'Whisky', race: 'British Shorthair' },
    { image: 'cat8.png', name: 'Raupy', race: 'Bengal' },
    { image: 'cat11.jpeg', name: 'Mimi', race: 'British Shorthair' },
    { image: 'cat10.jpeg', name: 'Lucy', race: 'Maine Coon' },
    { image: 'cat1.jpeg', name: 'Mittens', race: 'Ragdoll' },
    { image: 'cat2.jpeg', name: 'Mauzi', race: 'Abyssinian' },
    { image: 'cat9.jpeg', name: 'Nala', race: 'Ragdoll' },
    { image: 'cat3.jpeg', name: 'Marsi & Meowny', race: 'Europ. Shorthair' },
    { image: 'cat4.jpeg', name: 'Susi', race: 'Siamese' },
    { image: 'cat5.jpeg', name: 'Lenny & Morle', race: 'Europ. Shorthair' },
    { image: 'cat6.jpeg', name: 'Moritz', race: 'Europ. Shorthair' },
    { image: 'cat7.jpeg', name: 'Whisky', race: 'British Shorthair' },
    { image: 'cat8.png', name: 'Raupy', race: 'Bengal' },
    { image: 'cat11.jpeg', name: 'Mimi', race: 'British Shorthair' },
    { image: 'cat10.jpeg', name: 'Lucy', race: 'Maine Coon' },
    { image: 'cat1.jpeg', name: 'Mittens', race: 'Ragdoll' },
    { image: 'cat2.jpeg', name: 'Mauzi', race: 'Abyssinian' },
    { image: 'cat9.jpeg', name: 'Nala', race: 'Ragdoll' },
    { image: 'cat3.jpeg', name: 'Marsi & Meowny', race: 'Europ. Shorthair' },
    { image: 'cat4.jpeg', name: 'Susi', race: 'Siamese' },
    { image: 'cat5.jpeg', name: 'Lenny & Morle', race: 'Europ. Shorthair' },
    { image: 'cat6.jpeg', name: 'Moritz', race: 'Europ. Shorthair' },
    { image: 'cat7.jpeg', name: 'Whisky', race: 'British Shorthair' },
    { image: 'cat8.png', name: 'Raupy', race: 'Bengal' },
    { image: 'cat11.jpeg', name: 'Mimi', race: 'British Shorthair' },
    { image: 'cat10.jpeg', name: 'Lucy', race: 'Maine Coon' },
    { image: 'cat1.jpeg', name: 'Mittens', race: 'Ragdoll' },
  ];

  getAll(filter?: { query: string }): Kitty[] {
    if (filter?.query) {
      return this.kitties.filter((kitty) =>
        kitty.name.toLowerCase().includes(filter?.query.toLowerCase())
      );
    } else {
      return this.kitties;
    }
  }
}
