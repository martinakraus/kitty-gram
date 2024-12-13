import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Kitty } from '../models/model';

@Component({
  selector: 'app-kitty-card',
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './kitty-card.component.html',
  styleUrl: './kitty-card.component.scss',
})
export class KittyCardComponent {
  kitty = input<Kitty>({ image: 'n/a', race: 'n/a', name: 'n/a' });
}
