import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieNameSpace } from 'src/app/models/components/movie.model';
import { ApiService } from 'src/app/services/apiService.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ConstantUri } from 'src/app/utils/contant.uri';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent extends BaseComponent<MovieNameSpace.MovieResponse> implements OnInit {
  movie!: MovieNameSpace.MovieResponse;
  readonly imgBaseUrl = ConstantUri.imgBaseUrl;
  override set setGeneralResponse(val: MovieNameSpace.MovieResponse) {
    this.movie = val;
  }
  constructor(
    protected override readonly apiService: ApiService<MovieNameSpace.MovieResponse>,
    private readonly activeRoute: ActivatedRoute,
    private readonly router: Router,
  ) {
    super(apiService);
  }

  override ngOnInit(): void {
    this.activeRoute.params.subscribe((val: any) => {
      this.getMoviesList(val.id);
    });
  }

  private getMoviesList(movieId: string) {
    this.getConfig.url = ConstantUri.movie + `/${3}ssss`;
    this.getRequest();
  }

  goBack() {
    this.router.navigate(['/populares']);
  }

}
