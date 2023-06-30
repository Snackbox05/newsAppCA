import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from 'src/theme/services/newsapi.service';
import { ArticlesEntity } from '../interfaces/news-response';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  newsList: ArticlesEntity[] 
  private activatedRoute = inject(ActivatedRoute);
  constructor(private newsApiService: NewsApiService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getTopHeadlines();
  }

  getTopHeadlines() {
    this.newsApiService.getTopCountryHeadlines('ie', this.folder)
    .pipe(map((results) => results.articles))
    .subscribe((news) => (this.newsList = news))
  }
}
