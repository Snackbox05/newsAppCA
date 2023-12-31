import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NewsResponse } from 'src/app/interfaces/news-response';

@Injectable({
    providedIn: 'root'
})

export class NewsApiService {
    topHeadlinesPath = environment.API_URL;
    constructor(private http: HttpClient) { }

    getTopCountryHeadlines(country: string, category: string): Observable<NewsResponse> {
        return this.http.get<NewsResponse>(
            this.topHeadlinesPath +
            `?country=${country}&category=${category}&pageSize=10&apiKey=${environment.API_KEY}`)
    }
}