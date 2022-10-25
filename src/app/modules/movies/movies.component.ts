import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesNameSpace } from 'src/app/models/components/movies.model';
import { ApiService } from 'src/app/services/apiService.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ConstantUri } from 'src/app/utils/contant.uri';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent extends BaseComponent<MoviesNameSpace.MoviesResponse> implements OnInit {
  moviesList!: MoviesNameSpace.MoviesResponse;
  title = 'Bienvenidos.';
  subtitle = 'Millones de películas, programas de televisión y personas por descubrir. Explora ahora.';
  readonly imgBaseUrl = ConstantUri.imgBaseUrl;
  override set setGeneralResponse(val: MoviesNameSpace.MoviesResponse) {
    this.moviesList = val;
  }
  constructor(
    protected override readonly apiService: ApiService<MoviesNameSpace.MoviesResponse>,
    private readonly router: Router,
  ) {
    super(apiService);
  }

  override ngOnInit(): void {
    this.getConfig.url = ConstantUri.movieGenres;
    this.getRequest();
  }

  seeDetail(movieId: number) {
    this.router.navigate([`populares/peliculas/${movieId}`]);
  }

}
