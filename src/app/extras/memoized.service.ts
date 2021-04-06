import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { memoize } from './memoize';

let hitCount = 0;

@Injectable({
  providedIn: 'root'
})
export class MemoizedService {

  public fetchResource: (id: string) => any;

  constructor(private http: HttpClient) {
      this.fetchResource = memoize(this.privateFetchResource);
  }

  // can return anything but it must be passed into the memoize function
  private privateFetchResource = (id: string) => {
      hitCount++;
      // In this particular case we choose to retrieve content using param id.
      return this.http.get<any>(`http://url/${id}`);
  }

}
