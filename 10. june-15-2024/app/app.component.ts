import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CountryService } from '../service/country.service';
import { filter, debounceTime, switchMap, catchError, EMPTY, retry } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  searchForm: FormGroup;
  isLoading = false;
  showSidebar = false;

  constructor(
    private fb: FormBuilder, 
    countryService: CountryService,
    private snackBar: MatSnackBar) {
    this.searchForm = this.fb.group({ keyword: [''] });
    this.searchForm
      .get('keyword')!
      .valueChanges.pipe(
        takeUntilDestroyed(),
        filter((keyword) => keyword.length > 3),
        debounceTime(2000),
        switchMap((keyword) => {
          this.isLoading = true;
          return countryService.getCountryByName(keyword).pipe(
            retry(3),
            catchError((error: HttpErrorResponse) => {
              this.isLoading = false;
              console.error(error);
              this.snackBar.open(error.message, 'Close');
              return EMPTY;
            })
          );
        })
      )
      .subscribe((value) => {
        this.isLoading = false;
        console.log(value);
      });
  }
}
