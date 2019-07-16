import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {FeatureService} from '../../shared/services/feature/feature.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {IFeature} from '../../shared/models/feature.interface';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {

  public features: Array<IFeature> = [];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private featureService: FeatureService) { }

  public ngOnInit(): void {
    this.featureService
      .getFeatures()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.features = res;
      }, err => {
        console.log(err);
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public scrollToElement(element: any) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }

}
