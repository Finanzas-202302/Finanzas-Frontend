import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedStateService {
  private selectedOptionSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  selectedOption$: Observable<string> =
    this.selectedOptionSubject.asObservable();

  setSelectedOption(option: string) {
    this.selectedOptionSubject.next(option);
  }
}
