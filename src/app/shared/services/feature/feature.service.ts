import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {Observable} from 'rxjs';
import {IFeature} from '../../models/feature.interface';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private apiService: ApiService) { }

  public getFeatures(): Observable<Array<IFeature>> {
    return this.apiService.get<Array<IFeature>>('../../../../assets/mocks/features.json');
  }
}
