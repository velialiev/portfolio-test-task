import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api/api.service';
import {IPhoto} from '../../shared/models/photo.interface';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss']
})
export class WebProjectsComponent implements OnInit, OnDestroy {

  public photos: Array<IPhoto> = [];
  public currentPage = 1;
  private imagesPerPage: number;
  private numberOfImages: number;
  public numberOfPages: number;

  public loading: boolean;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private apiService: ApiService) { }

  public ngOnInit() {
    this.getPhotos();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getPhotos(page: number = 1): void {
    this.loading = true;
    this.apiService.getWithHttpResonseData<Array<IPhoto>>(`api/photos/?page=${page}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
      this.photos = res.body;
      this.imagesPerPage = +res.headers.get('x-per-page');
      this.numberOfImages = +res.headers.get('x-total');
      this.numberOfPages = Math.ceil(this.numberOfImages / this.imagesPerPage);
      this.currentPage = page;
      this.loading = false;
    });
  }
}
