import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private httpClient: HttpClient) { }

  search = (term: string) => {
    // return 'I am Wikipedia Search Results';
    return this.httpClient.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    })
  }
}
