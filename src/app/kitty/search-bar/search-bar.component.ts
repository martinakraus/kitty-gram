import {
  Component,
  computed,
  inject,
  Input,
  input,
  NgZone,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  private domSanitizer = inject(DomSanitizer);
  private router = inject(Router);
  private ngZone = inject(NgZone);
  searchQuery = input('');
  result = computed(() =>
    this.domSanitizer.bypassSecurityTrustHtml(this.searchQuery())
  );

  search(searchTerm: string) {
    if (searchTerm) {
      const queryParams = { queryParams: { query: searchTerm } };
      this.ngZone.run(
        async () => await this.router.navigate(['/kitties'], queryParams)
      );
    } else {
      this.ngZone.run(async () => await this.router.navigate(['/kitties']));
    }
  }
}
